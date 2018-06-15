
const assert = require('assert')
const ZQSign = require('zqsign').ZQSign

module.exports = app => {
  app.addSingleton('zqSign', async function createZQSign(config, app) {
    assert(config.url && config.zqid && config.privateKey && config.publicKey);
    app.coreLogger.info(`[egg-zqsign]: ${config.url} ${config.zqid}`)
    return new ZQSign(config.url, config.zqid, config.privateKey, config.publicKey, {alg: 'RSA-SHA1'})
  })
}
