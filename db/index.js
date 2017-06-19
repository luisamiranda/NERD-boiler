const db = require('./db');

require('./models');

var syncedDbPromise = db.sync();

syncedDbPromise.then(function () {
  console.log('Sequelize models synced to PostgreSQL');
});

module.exports = syncedDbPromise;
