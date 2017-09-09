const stitch = require("mongodb-stitch")
const client = new stitch.StitchClient('card_tracker-kihfn');
const db = client.service('mongodb', 'mongodb-atlas').db('database');
client.login().then(() =>
  db.collection('items').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
).then(() =>
  db.collection('items').find({owner_id: client.authedId()})
).then(docs => {
  console.log("Found docs", docs)
  console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
  console.error(err)
});