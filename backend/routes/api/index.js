const router = require('express').Router()
const shorten = require('./shorten')
const urls = require('./urls')

router.use('/shorten', shorten)
router.use('/urls', urls)

module.exports = router
