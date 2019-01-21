const mongoose = require('mongoose')
const shortid = require('shortid')

require('../../models/Click')

const ClickModel = mongoose.model('Click')

const clicksTestData = [
  { url_id: shortid.generate() },
  { url_id: shortid.generate() },
  { url_id: shortid.generate() }
]

const validClick = {
  _id: expect.any(Object),
  url_id: expect.any(String),
  created_at: expect.any(Date)
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

it('store new url click in the database', async () => {
  const newClick = new ClickModel()
  newClick.url_id = shortid.generate()
  await newClick.save().then(click => {
    expect(click).toBeDefined()
    expect(click).toEqual(expect.objectContaining(validClick))
  })
})

it('insert many urls clicks in the database', async () => {
  await ClickModel.insertMany(clicksTestData, (err, clicks) => {
    expect(clicks).toBeDefined()
    expect(clicks.length).toEqual(clicksTestData.length)
  })
})

it('search for an inexistent url ID in the database', async () => {
  const url = await ClickModel.findOne({ url_id: 'not_a_valid_id' }, () => {})

  expect(url).toBeNull()
})
