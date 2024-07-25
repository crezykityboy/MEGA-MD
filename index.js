const bot = require(__dirname + '/lib/mmd')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`owner ${VERSION}`)
  try {
    await bot.init()
    bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
