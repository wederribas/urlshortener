const mongoose = require('mongoose')

/**
 * Model that represents a clicked link, matching a specific URL
 */
const ClickSchema = new mongoose.Schema(
  {
    url_id: { type: String, ref: 'Url' },
    created_at: { type: Date, default: Date.now }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: false } }
)

mongoose.model('Click', ClickSchema)
