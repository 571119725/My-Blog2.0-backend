const bodyParser = require('koa-bodyParser');
const router = require('koa-router')();
const { ListCollectionsCursor } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const blogDataCount = require('./blogDataCount.js');
const url = 'mongodb://localhost:27017';
const dbname = 'myblog';
const client = new MongoClient(url);
router.post('/getBlogs', async (ctx, next) => {
  await client.connect();
  const db = client.db(dbname);
  const collection = db.collection('blogCollections');
  allData = await collection.find().toArray();
  ctx.response.body = allData;
  client.close();
  blogDataCount(allData);
});
router.post('/addBlog', async (ctx, next) => {
  await client.connect();
  const db = client.db(dbname);
  const collection = db.collection('blogCollections');
  await collection.insertOne(ctx.request.body);
  ctx.response.body = {code:200};
  client.close();
});
module.exports = router.routes();