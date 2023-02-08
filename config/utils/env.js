const PRODUCTION = 'production'
exports.isProduction = process.env.NODE_ENV === PRODUCTION

exports.isDevelopment = process.env.NODE_ENV !== PRODUCTION

exports.PORT = process.env.PORT || '8001'
