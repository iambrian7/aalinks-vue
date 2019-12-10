var path = require('path');
var fs = require('fs');

// var locations = getFile('data/globalLocations.json')
// var loc = JSON.parse(locations)
// console.log(`locations found: ${loc.length}`)


// "_id": "5d93d45c042ba91710e61c7a",
// "name": "It Might Have Been Worse",
// "slug": "it-might-have-been-worse",
// "updated": "2019-10-01T22:34:04.152Z",
// "day": "3",
// "time": "19:00",
// "time_formatted": "7:00 pm",
// "id": 41378,
// "location_id": 41377,
// "location": "Destiny Hill Church",
// "location_notes": "",
// "location_updated": "2019-10-01T22:34:04.152Z",
// "__v": 0,
// "loc": {
//   "type": "Point",
//   "coordinates": [
//     -93.4479466,
//     44.9270679
//   ]
// },
// "types": [
//   "MW",
//   "TO",
//   "O",
//   "HE"
// ]
// }

const home = {lat:44.9270729,lng:-93.4479148};

var { getLocations, getMeetings, distance, getRegions, getSiteNames, writeFile } = require("./scrapeUtil");

var globalLocations = getLocations();
var globalMeetings = getMeetings();

// console.log(`meetings found: ${globalMeetings.length}`)
// globalMeetings.forEach((x,i) => {
  module.exports = createMeetingGuide;

 function createMeetingGuide(){
// function createMeetingGuide(globalLocations, globalMeetings){
  return {
  globalLocations,
  globalMeetings,
  MDmeetings() {
    console.log("create MDmeetings locs len=" + globalLocations.length )
  },
  geofind(miles,homelat,homelng){
    var found = globalLocations.filter(x => distance(homelat,homelng,x.lat,x.lng) < miles);
    console.log(`found at: ${found.length}`)
    console.log(`found size = ${JSON.stringify(found).length}`)
      var arrLocIds = found.map(x => x.id);
      //find all meetings
      var foundMeetings = globalMeetings.filter(x => arrLocIds.includes(x.locid));
      console.log(`foundMeetings = ${foundMeetings.length}`)
      console.log(`foundMeetings size = ${JSON.stringify(foundMeetings).length}`)
      console.log(`total returned locs+meetings size = ${JSON.stringify(foundMeetings).length + JSON.stringify(found).length}`)
      // map meetings into meeting-guide format
      const foundGeo = foundMeetings.map(x => {
        const loc = found.find(x2 => x2.id == x.locid);
        // parse address
        var a;
        if (typeof loc.address == "undefined"){
          loc.address = 'notfound,notfound,notfound,notfound,notfound'
        }
        var a = loc.address.split(','); 
        var s = a[2].trim().split(' ');
      //  var addressParsed = {
      //     "address": a[0],
      //   "city": a[1],
      //   "state": a[2],
      //   "postal_code": a[3],
      //   "country": a[4],
      // }
        return {
          // "_id": x.id,
          "name": uncode(x.name),
          // "slug": "it-might-have-been-worse",
          // "updated": "2019-10-01T22:34:04.152Z",
          "day": x.day,
          "time": convertTo24Hour(x.time),
          "time_formatted": x.time,
          "id": x.id,
          "location_id": x.locid,
          "location": uncode(loc.name),
          "address": a[0] ? a[0] : 'notfound',
          "city": a[1] ? a[1] : 'notfound',
          "state": s[0] ? s[0] : 'notfound',
          "postal_code": s[1] ? s[1] : 'notfound',
          "country": a[3] ? a[3] : 'notfound',
          "location_notes": "",
          "location_updated": loc.updated,
          // "__v": 0,
          "loc": {
            "type": "Point",
            "coordinates": [
              loc.lng,
              loc.lat
            ]
          },
          "types": x.types
          }
        })
        console.log(`geofind len = ${foundGeo.length}`)
        console.log(`geofind size = ${JSON.stringify(foundGeo).length}`)

        return foundGeo;
      }// end geofind
  }
};

// const md = createMeetingGuide();
// // const md = createMeetingGuide(globalLocations,globalMeetings);
// md.MDmeetings();
// const mymeetings = md.geofind(1,home.lat,home.lng)
// const mymeetings2 = md.geofind(2,home.lat,home.lng)
// const mymeetings3 = md.geofind(3,home.lat,home.lng)
// console.log(`first found= ${JSON.stringify(mymeetings[0], null, 3)}`)
// console.log(`first found= ${JSON.stringify(mymeetings2[0], null, 3)}`)
// console.log(`first found= ${JSON.stringify(mymeetings3[0], null, 3)}`)


function convertTo24Hour(time) {
  if (time == "Noon"){
    return "12:00";
  }
    var hours = parseInt(time.substr(0, 2));
    if(time.indexOf('am') != -1 && hours == 12) {
        time = time.replace('12', '0');
    }
    if(time.indexOf('pm')  != -1 && hours < 12) {
        time = time.replace(hours, (hours + 12));
    }
    return time.replace(/(am|pm)/, '');
}

function formatFrom24Hrsto12Hrs(time, ignoreZero){
  let [hours, minutes] = time.split(':')
  let modifier = +hours < 12 ? 'am' : 'pm'
  hours = +hours % 12 || 12
  minutes = ignoreZero && +minutes === 0 ? '' : `:${minutes}`
  return hours + minutes + modifier
}
function uncode(value) {
  var x = value.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#039;/g, "'");
  // console.log(`filter: noded: ${value} to ${x}`)
  return x;
};