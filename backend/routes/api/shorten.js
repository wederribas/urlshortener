const router = require('express').Router()
const mongoose = require('mongoose')
const UrlModel = mongoose.model('Url')

// Base URL will be the DNS (specially in production) to concatenate in the URL
const baseUrl = process.env.BASE_URL

/**
 * Performs the URL shorten store
 */
router.post('/', function(req, res, next) {
  const payload = {}

  // If the given original URL is already stored, just return its respective
  // shortened URL. Otherwise, shorten the given URL and store it
  UrlModel.findOne({ original: req.body.original })
    .then(async function(existingUrl) {
      if (!existingUrl) {
        const newUrl = new UrlModel()

        newUrl.original = req.body.original

        await newUrl.save().then(function(url) {
          payload.link = baseUrl + url._id
        })
      } else {
        payload.link = baseUrl + existingUrl._id
      }

      return res.json(payload)
    })
    .catch(next)
})

module.exports = router
