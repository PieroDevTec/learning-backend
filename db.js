const db = require('mongoose');
db.Promise = global.Promise;
// 'mongodb+srv://pieroAdmin:0Q7JiQ3Gy192yQvyUuMtXOziEXx@cluster0.0a4oh.mongodb.net/telegrom?retryWrites=true&w=majority'

async function connect(url){
  await db.connect(url,{
  useNewUrlParser: true,
  });
  console.log('[DB-Message] Connect Successfully');
}

module.exports = connect;

