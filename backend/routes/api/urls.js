const router = require('express').Router()
const mongoose = require('mongoose')
const UrlModel = mongoose.model('Url')
const ClicksModel = mongoose.model('Click')

const baseUrl = process.env.BASE_URL

/**
 * Get the URL general information and its clicks counting
 */
router.get('/:urlId', function(req, res, next) {
  const id = req.params.urlId

  UrlModel.findById(id).then(async function(url) {
    if (!url) {
      return res.sendStatus(404)
    }

    // Generate URL counting aggregation per year/month
    const urlClicks = await ClicksModel.aggregate([
      { $match: { url_id: id } },
      {
        $group: {
          _id: {
            year: { $year: '$created_at' },
            month: { $month: '$created_at' }
          },
          count: { $sum: 1 }
        }
      }
    ])

    return res.json({
      hash: url._id,
      original: url.original,
      link: baseUrl + url._id,
      clicks: urlClicks.map(click => ({
        ...click._id,
        count: click.count
      }))
    })
  })
})

module.exports = router
