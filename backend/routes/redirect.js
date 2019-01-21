const router = require('express').Router()
const monogoose = require('mongoose')
const ClickModel = monogoose.model('Click')
const UrlModel = monogoose.model('Url')

/**
 * Performs shortened URL translation back to original and redirect
 */
router.get('/', function(req, res, next) {
  // Get the URL id removing the slash from the string beginning
  const id = req.originalUrl.substr(1)

  // Try to find the given URL id
  UrlModel.findById(id).then(function(url) {
    if (!url) {
      return res.sendStatus(404)
    }

    // Registers new click and redirect to original URL
    const click = new ClickModel()
    click.url_id = id

    click.save().then(function() {
      return res.redirect(url.original)
    })
  })
})

module.exports = router
