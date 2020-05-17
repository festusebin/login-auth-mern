module.exports = {
  mongoURI: /* "mongodb+srv://barzaar:<PASSWORD>@mern-auth-kpajj.mongodb.net/barzaar?retryWrites=true&w=majority" || "mongodb://localhost:27017/barzaar" */
  process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/auth-mern',
 //DATABASE_PASSWORD=0rlOO7Hm4ryWtDCD
 secretOrKey: "your-secret-key-must-be-greater-than-32"
}