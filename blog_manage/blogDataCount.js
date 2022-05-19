const { ListCollectionsCursor } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbname = 'myblog';
const client = new MongoClient(url);
function blogDataCount (allData) {
  client.connect((err) => {
    if(err) throw err;
    const db= client.db(dbname);
    const collection = db.collection('blogStatistics');
    console.log(allData.length);
    collection.updateOne({'id':1},{$set:{'blogNum':allData.length}},(err,result) => {
      if(err) throw err;
      client.close();
    });
  })
}
module.exports = blogDataCount;