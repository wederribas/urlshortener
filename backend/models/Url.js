const mongoose = require('mongoose')
const shortid = require('shortid')

/**
 * Model that represents a shortened URL
 */
const UrlSchema = new mongoose.Schema(
  {
    // The id is generated on-the-fly by shortid, ensuring that it is unique
    // Notice that the URL id will be matched as the shortened URL path
    _id: {
      type: String,
      default: shortid.generate
    },
    original: String
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

mongoose.model('Url', UrlSchema)
