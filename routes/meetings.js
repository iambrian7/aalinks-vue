var express = require('express');
var router = express.Router();
var mongoose = require('mongoose') //mongo connection
var Geomeetings = require('../models/db');

//var index = require('./index');


//Geomeetings._ensureIndex({'loc.coordinates':'2dsphere'});
router.get('/', function(req, res, next) {
 // res.send("get meetings...............")
 console.log("api getting meetings....")
  var miles = req.query.miles;
  var lat = req.query.lat;
  var lng = req.query.lng;
  if (miles == undefined) {
    miles = 3000;
    //res.redirect('/');
  }
 // else {

  
  
 // miles = 9000;
  console.log("got miles= " + miles + " lat=" + lat + " lng=" + lng)
  var limit = 9000;//3000;//req.query.limit || 10;
  var maxDistance = miles * 1600;// 3963.2;//req.query.distance || 8;
  var coords = [];
  coords[0] = -93.2409158;//req.query.longitude;
  coords[1] = 44.9666072;//req.query.latitude;
  console.log("find at " + coords + " max dist: " + maxDistance)
  console.time('retrieved');
  Geomeetings.find({
      loc: {
        $near :
          {
            $geometry : {
              //  $near : {
              type : "Point" ,
              coordinates : [ -93.443919, 44.916980 ] },
            $maxDistance : maxDistance
          }
      }
    }
  ).limit(limit).exec(function(err, locations) {
    if (err) {return res.json(500, err);}
    console.timeEnd('retrieved');
    // console.log('meeting found: ' + JSON.stringify(locations,null,4))
    // for(var i=0; i<locations.length; i++){
    //   console.log(locations[i].loc.coordinates[1] + ": " + locations[i].loc.coordinates[0])
    // }
    console.log("locations found: " + locations.length)
    res.json(200, locations);
  });
 // }// else got miles
});
router.get('/:name', function(req, res, next) {
 
  var name = req.params.name;
  console.log("meeting=" + name)
  //var name = "sahara-sunrise-1st-step";
  Geomeetings.findOne({ 'slug': name },  function (err, data) {
  if (err) return handleError(err);
  console.log(JSON.stringify(data,null, 3))
  res.locals = {
        some_value: 'foo bar',
        list: ['cat', 'dog'],
        mymeeting: data
    }
  res.render('index', {
     title: data.name,
     
     // Override `foo` helper only for this rendering.
        helpers: {
            meeting: function () { return data.name; }
        }
       });
  //console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
})
 
});

  function handleError(err) {
    console.log("geomeeting error: " + err)
  }

// router.get('/create', function(req, res, next) {
//   console.dir('hostname: ' + req.hostname)
//   console.log("createing aalinks local")
//  //res.send("created aalinks local")

// /* GET home page. */
// // router.get('/', function(req, res, next) {
// //   console.time("mongoose meetings")
// //
// //   mongoose.model('meetings').find({}).exec(function(err, data){
// //     //mongoose.model('meetings').find.toArray(function (err,meetings) {
// //     // res.send(data);
// //     console.log("meetings length= " + data.length)
// //     console.timeEnd("mongoose meetings")
// //     // console.log("meeting: " + JSON.stringify(data, null, 3))
// //     res.render('index', { title: 'Express', list: data });
// //   })
// //
// // });
// var stockMeetings = require('../public/js/mongoMeetings.js')
// //var Note = require('../models/noteModel')//(mongoose);
// //console.log("intergroupResponse file length = " + interGroupResponse.length)
// //interGroupResponse.forEach(function (m, i) {
//   if (!stockMeetings) {
//     console.log("can't find mongoMeetings.js...........");

//   }
//   stockMeetings.forEach(function(m, i){
//     console.log(" meeting " + i + ".  " + JSON.stringify(m, null, 3));
//   })
  // for (var i = 0; i < interGroupResponse.length; i++) {
  // var m = interGroupResponse[i];
  //   var newMeeting = {
  //     "name" : m.name,
  //     "slug": m.slug,
  //     "updated":  new Date(),
  //     "day" : m.day,
  //     "time" : m.time,
  //     "time_formatted": m.time_formatted,
  //     "types": m.types,
  //     "id": m.id,
  //     "location_id": m.location_id, // raw meetings now sequential ids
  //     "address": m.address,
  //     "city": m.city,
  //     "state":m.state,
  //     "postal_code": m.postal_code,
  //     "country": m.country,
  //     "loc": {
  //       "coordinates": [m.longitude * 1,m.latitude * 1],  // [<longitude>, <latitude>]
  //       "type": "Point"      // create the geospatial index
  //     },
  //     // "latitude": m.latitude,
  //     // "longitude": m.longitude,
  //     "location": m.location,
  //     "location_slug": m.location_slug,
  //     "location_notes": m.location_notes,
  //     "location_updated": new Date(),
  //     "group": m.group,
  //     "group_notes": m.group_notes
  //   }
  //   // console.log("meeting = " + i + ".  " + JSON.stringify(newMeeting,null,4));
  //     Geomeetings.create(newMeeting, function (err, data) {
  //         if (err) return handleError(err);
  //         // saved!
  //         // console.log('meeting saved with create for NewMeetings: ' + JSON.stringify(data,null,4))
  //       })
  //   //if (i > 1) break;
  // }
//});// end of /create
module.exports = router;