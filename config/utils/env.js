const dotenv = require('dotenv')
const path = require('path')

const PRODUCTION = 'production'
exports.isProduction = process.env.NODE_ENV === PRODUCTION

exports.isDevelopment = process.env.NODE_ENV !== PRODUCTION

exports.PORT = process.env.PORT || '8001'

exports.parseEnvFile = (env) => {
  const { parsed } = dotenv.config({
    path: path.resolve(process.cwd(), `.env.${env}`)
  })
  if (parsed) {
    const res = {}
    Object.keys(parsed).forEach((key) => {
      res[`process.env.${key}`] = JSON.stringify(parsed[key])
    })
    return res
  }
  return null
}
