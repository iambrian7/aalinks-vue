import Vue from 'vue'
import Vuex from 'vuex'
// import cart from './modules/cart'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

function mileLimit(m,mileMax,lat,lng){
  // console.log("mileLimit-lat:" + this.lat + " lng:" + this.lng)
  // console.log("meeting  -lat:" + m.loc.coordinates[1] + " lng:" + m.loc.coordinates[0])
   return (mileMax > distance(lat,lng,m.loc.coordinates[1],m.loc.coordinates[0])) 
 }


function distance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = Math.PI * lat1 / 180;
  var radlat2 = Math.PI * lat2 / 180;
  var radlon1 = Math.PI * lon1 / 180;
  var radlon2 = Math.PI * lon2 / 180;
  var theta = lon1 - lon2;
  var radtheta = Math.PI * theta / 180;
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === 'K') { dist = dist * 1.609344 };
  if (unit === 'N') { dist = dist * 0.8684 };

  return dist;
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    meetings: [],
    newLocation: {"name":"Turning Point","lat":30.225,"lng":-92.011,"address":"210 Eighth St, Lafayette, LA 70501, USA"},
    filters: {
      day: 0,
      picked: '',
      mileMax: 2,
      startMiles: 50,
      lat: 44.92707,
      lng: -93.44791
      // home: {lat:44.9270729,lng:-93.4479148},
    },
    startMiles: 50,
    lat: 44.92707,
    lng: -93.44791,
    viewMeeting: null,
    selectedMeeting: null,
    activetab: 1,
    stripeKey: null
  },
  //showing things, not mutating state
  getters: {
    // tripleCounter: state => {
    //   return state.counter * 3;
    // }
    getSelectedMeeting: state => {
      return state.selectedMeeting
    },
    getMileMax: state => {
      return state.filters.mileMax
    },
    getViewMeeting: state => {
      return state.viewMeeting
    },
    getAllMeetings: state => {
      return state.meetings
    },
    getMeetingById: (state) => (id) => {
      console.log(`store:getter:getMeetingById= ${id}`)
      return state.meetings.find(x => x.id === id)
    },
    getFilteredMeetings: (state) => {
    // getFilteredMeetings: (state) => (options) => {
    // debugger
    console.log(`getFilteredMeetings...............`)
    var day = state.filters.day //|| 7
    var picked = state.filters.picked
    var mileMax = state.filters.mileMax

    var lat = state.filters.lat
    var lng = state.filters.lng
      var newMeetings = state.meetings.filter(function(m){
//debugger
        return ((mileLimit(m,mileMax,lat,lng)) &&
                 (day == 7 || day == m.day) &&
                (!picked || m.types.includes(picked))
                 )
     })
     return newMeetings
    }
  },
  //mutating the state
  //mutations are always synchronous
  mutations: {
    //showing passed with payload, represented as num
    // increment: (state, num) => {
    //   state.counter += num;
    // }
    getAllMeetings: (state, meetings) => {
      state.meetings = meetings
    },
    setOptions: (state, options) => {
      state.filters.day = options.day
      state.filters.picked = options.picked
      state.filters.mileMax = options.mileMax
      state.filters.lat = options.home.lat
      state.filters.lng = options.home.lng
    },
    setViewMeeting: (state, meeting ) => {
      state.viewMeeting = meeting
    },
    setSelectedMeeting: (state, meeting ) => {
      state.selectedMeeting = meeting
    },
    changeMileMax: (state , miles ) => {
      state.filters.mileMax = miles
    },
    getStripeKey: (state , key ) => {
      state.stripeKey = key
    },

  }, 
  //commits the mutation, it's asynchronous
  actions: {
    // showing passed with payload, represented as asynchNum (an object)
    // asyncDecrement: ({ commit }, asyncNum) => {
    //   setTimeout(() => {
    //     //the asyncNum objects could also just be static amounts
    //     commit('decrement', asyncNum.by);
    //   }, asyncNum.duration);
    // }
  //   getProducts({commit}, type) {
  //     return axios.get(`/api/products/${type}`)
  //         .then(res => {
  //             let products = res.data;
  //             commit('SET_PRODUCTS', {products, type})
  //         }).catch(err => {
  //         console.log(err);
  //     })
  // },
    getStripeKey({commit, state}) {
      console.log(`before: actions: getStripeKey: `)
      return axios.get(`http://localhost:8086/stripekey`)
        .then(res => {
          console.log(`after actions: getStripeKey: ${res.data.publishableKey}`)
          commit('getStripeKey', res.data.publishableKey);
        })
    },
    getAllMeetings: async ({ commit, state }) => {
      console.log("actions: getAllMeetings")
      console.time("getAllMeetings");
      ///////////////  get meetings from server on DigitalOcean acces is mongodb getting only ~1000 meetings potiental
      ///////////////  get meetings from server on DigitalOcean acces is mongodb getting only ~1000 meetings potiental

      // axios.get("https://moonstrider.com/meetings/?miles=40")
      
      ///////////////  get meetings from server on DigitalOcean acces is mongodb getting only ~1000 meetings potiental
      ///////////////  get meetings from server on DigitalOcean acces is mongodb getting only ~1000 meetings potiental
      ///////////////  get meetings from server on DigitalOcean acces is mongodb getting only ~1000 meetings potiental
      
      
      /////////////  get meetings from file in server
      /////////////  get meetings from file in server
      // console.log(`getting: http://localhost:8086/api/meetingsx/?miles=${state.startMiles}&lat=${state.filters.lat}&lng=${state.filters.lng}`)
      
      var res = await axios.get(`http://localhost:8086/api/meetingsx/?miles=${state.startMiles}&lat=${state.filters.lat}&lng=${state.filters.lng}`)
      // axios.get(`http://localhost:8086/api/meetingsx/?miles=${state.startMiles}&lat=${state.filters.lat}&lng=${state.filters.lng}`)
      
      /////////////  get meetings from file in server
      /////////////  get meetings from file in server
      /////////////  get meetings from file in server
      
      ////////////   get meetings from mongodb (1047 max)
      ////////////   get meetings from mongodb (1047 max)
      
      // axios.get(`http://localhost:8086/api/meetings/?miles=${state.startMiles}&lat=${state.lat}&lng=${state.lng}`)
      
      ////////////   get meetings from mongodb (1047 max)
      ////////////   get meetings from mongodb (1047 max)
      ////////////   get meetings from mongodb (1047 max)
      
      
      // axios.get("http://localhost:8086/api/meetings/?miles=40&lat=lat&lng=lng")
        console.timeEnd("getAllMeetings");
      commit('getAllMeetings', res.data)
      // .then(function(x) {
      //   console.log(`Meetings found" ${x.data.length}`)
      //   console.log(`first meeting format: ${JSON.stringify(x.data[0], null, 2)}`)
      //     commit('getAllMeetings', x.data)
      // })
    },
    setViewMeeting: ({ commit }, meeting ) => {
      commit('setViewMeeting', meeting)
    },
    changeMileMax: ({ commit }, miles ) => {
      commit('changeMileMax', miles)
    },
    setSelectedMeeting: ({ commit }, meeting ) => {
      if (meeting){
        console.log(`store: setSelectedMeeting name=${meeting.name}`)
      }
      commit('setSelectedMeeting', meeting)
    },
  }
});