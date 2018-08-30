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
    filters: {
      day: 0,
      picked: '',
      mileMax: 2,
      lat: 44.92707,
      lng: -93.44791
     // home: {lat:44.9270729,lng:-93.4479148},
    },
    viewMeeting: null,
    selectedMeeting: null
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
    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // }
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
    getAllMeetings: ({ commit }) => {
    //  axios.get("http://localhost:8086/api")
      axios.get("https://moonstrider.com/meetings/?miles=40")
      // axios.get("http://localhost:8086/api")
      .then(function(res) {
          commit('getAllMeetings', res.data)
      })
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