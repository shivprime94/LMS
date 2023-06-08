module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'shiv@2001',
  DB: 'self_actuarylms',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
