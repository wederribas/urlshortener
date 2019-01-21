const router = require('express').Router()
const api = require('./api')
const redirect = require('./redirect')

// Encapsulates the main applications routes, except the redirect one
router.use('/api/v1', api)

// The redirect route is not wrapped with /api/v1 in order to generate a more
// user-friendly shortened URL
router.use('/[a-zA-Z0-9]{9}$', redirect)

module.exports = router
