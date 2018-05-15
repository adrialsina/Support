const INITIAL_STATE = { place_reducer:null} ;
import * as TYPES from '../actions/types';


export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case TYPES.conectar:
      console.log('place_reducer',action.payload.data.query);
      console.log('PREv',action.payload.data.low);
      console.log('NEXT',action.payload.data.high);
      return Object.assign({}, state, {
       place_reducer: action.payload.data.query,
       previous_image: action.payload.data.low,
       next_image: action.payload.data.high,
       date_resp: action.payload.data.date_resp,
       moment_resp: action.payload.data.moment_resp,
       day_resp: action.payload.data.day_resp,
       act_resp: action.payload.data.act_resp,
       hour_resp: action.payload.data.hour_resp,
       place_resp: action.payload.data.place_resp,
       heart_resp: action.payload.data.heart_resp
      });

	 // case TYPES.INFO:
	 //  console.log('INFO',action.payload);
	 //  return Object.assign({}, state, {
	 //   info_searchbar: action.payload.data
	 //  });

    default:
      return state;

  }
}
