var mongo = require('mongodb');

var connMongoDb = () => {
  var db = new mongo.Db(
      'got',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
  );

  return db;
}
module.exports = () => {
  return connMongoDb;
}