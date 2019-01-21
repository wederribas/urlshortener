const mongoose = require('mongoose')

require('../../models/Url')

const UrlModel = mongoose.model('Url')

const urlsTestData = [
  { original: 'https://google.com' },
  { original: 'https://amazon.com' },
  { original: 'https://facebook.com' },
  { original: 'https://airbnb.com' }
]

const validUrl = {
  _id: expect.any(String),
  original: expect.any(String),
  created_at: expect.any(Date),
  updated_at: expect.any(Date)
}

beforeAll(async () => {
  await mongoose.connect(
    global.__MONGO_URI__,
    { useNewUrlParser: true }
  )
})

afterAll(async () => {
  await mongoose.disconnect()
})

it('store new shortened urls in the database', async () => {
  const newUrl = new UrlModel()
  newUrl.original = 'https://test.com'
  await newUrl.save().then(url => {
    expect(url).toBeDefined()
    expect(url).toEqual(expect.objectContaining(validUrl))
  })
})

it('insert many urls in the database', async () => {
  await UrlModel.insertMany(urlsTestData, (err, urls) => {
    expect(urls).toBeDefined()
    expect(urls.length).toEqual(urlsTestData.length)
  })
})

it('search for an inexistent url ID in the database', async () => {
  const url = await UrlModel.findById('not_a_valid_id', () => {})

  expect(url).toBeNull()
})
