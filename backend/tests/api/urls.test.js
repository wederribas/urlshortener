const mongoose = require('mongoose')
const request = require('supertest')
const express = require('express')

require('../../models/Url')
require('../../models/Click')

const UrlModel = mongoose.model('Url')
const ClickModel = mongoose.model('Click')

// Instantiates a new express app with its routes
const app = express()
app.use(express.json())
app.use(require('../../routes'))

let urlId

// URL info object containing all of its misc information
const urlInfo = {
  hash: expect.any(String),
  original: expect.any(String),
  link: expect.any(String),
  clicks: expect.arrayContaining([
    expect.objectContaining({
      year: expect.any(Number),
      month: expect.any(Number),
      count: expect.any(Number)
    })
  ])
}

beforeAll(async () => {
  await mongoose.connect(
    global.__MONGO_URI__,
    { useNewUrlParser: true }
  )

  // Create new URL into database
  const newUrl = new UrlModel()
  newUrl.original = 'https://test.com'
  await newUrl.save().then(url => {
    urlId = url._id
  })

  // Create new URL click into database
  const newClick = new ClickModel()
  newClick.url_id = urlId
  await newClick.save().then(click => {})
})

afterAll(async () => {
  await mongoose.disconnect()
})

it('Should get URL info with status 200', async () => {
  const response = await request(app).get(`/api/v1/urls/${urlId}`)

  expect(response.statusCode).toEqual(200)
  expect(response.body).toEqual(expect.objectContaining(urlInfo))
})

it('Should get URL info with status 404', async () => {
  const response = await request(app).get(`/api/v1/urls/not_a_valid_id`)

  expect(response.statusCode).toEqual(404)
})
