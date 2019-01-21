const fs = require('fs')
const mongoose = require('mongoose')
const path = require('path')

const { MongoMemoryServer } = require('mongodb-memory-server')

const globalConfigPath = path.join(__dirname, 'globalConfig.json')

const mongod = new MongoMemoryServer({
  autoStart: false
})

module.exports = async () => {
  if (!mongod.isRunning) {
    await mongod.start()
  }

  const mongoConfig = {
    mongoUri: await mongod.getConnectionString()
  }

  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig))

  global.__MONGOD__ = mongod
}
