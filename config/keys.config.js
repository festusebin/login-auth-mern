module.exports = {
  mongoURI: /* your-mongoURI*/
  process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/auth-mern',
 secretOrKey: "your-secret-key-must-be-greater-than-32"
}