const INITIAL_STATE = { place_reducer:null} ;
import * as TYPES from '../actions/types';


export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case TYPES.conectar:
      console.log('place_reducer',action.payload.data.query);
      return Object.assign({}, state, {
       place_reducer: action.payload.data.query,
       previous_image: action.payload.data.low,
       next_image: action.payload.data.high
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
