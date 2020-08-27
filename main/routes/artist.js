import express from "express";
import MongoConnector from './utils';

const router = express.Router();
const connector = new MongoConnector();
const database = connector.get();
const artist = database.collection('artists');


router.get('/artists',function(req,res) {
    artist.find().toArray(function(err,docs){
      
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs)
    })
  })
  
  
  router.post('/artists', function (req,res) {
    var artist = req.body.name
    artist.insert(artist, function (err, result) {
        
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(artist);
  })
});

export default router;