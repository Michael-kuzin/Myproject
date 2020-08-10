import MongoClient from 'mongodb';

class MongoConnector {
    constructor(dataBaseObject) {
        if(MongoConnector.exists) {
          return MongoConnector.instance
        }
        this._dataBaseObject = dataBaseObject;
        MongoConnector.instance = this;
        MongoConnector.exists = true;
        return this;
    }
  init() {
    MongoClient.connect("mongodb://localhost:27017/", (err, database) => {
      if (err) {
        return console.log(err);
      } else {
        this.dataBaseObject = database;
      }
    })
  }
  get() {
    return this.dataBaseObject;
  }
};
export default MongoConnector;
