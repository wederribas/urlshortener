const NodeEnvironment = require('jest-environment-node')

const path = require('path')
const fs = require('fs')

const globalConfigPath = path.join(__dirname, 'globalConfig.json')

class MongoEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)
  }

  async setup() {
    console.log('Setting up the MongoDB test environment')

    const globalConfig = JSON.parse(fs.readFileSync(globalConfigPath, 'utf-8'))

    this.global.__MONGO_URI__ = globalConfig.mongoUri

    await super.setup()
  }

  async teardown() {
    console.log('Teardown MongoDB test environment')

    await super.teardown()
  }

  runScript(script) {
    return super.runScript(script)
  }
}

module.exports = MongoEnvironment
