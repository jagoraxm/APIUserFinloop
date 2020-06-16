module.exports = {
    port: process.env.port || 5050,
    db: process.env.MONGODB || 'mongodb://localhost:27017/users',
    secretToken: 'clavesecreta'
}