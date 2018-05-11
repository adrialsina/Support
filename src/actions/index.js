import axios from 'axios';

const ROOT_URL = 'http://localhost:5000';
import * as TYPES from './types';

export function conectar(place) {
	console.log("In", place);
  const request = axios.get(`${ROOT_URL}/result?d=${place.Day}&w=${place.Word}&m=${place.Moment}&dt=${place.Date}&p=${place.Place}`);
  return {
    type: TYPES.conectar, 
    payload: request
  };
}

// export function previous_image(place) {
//   const request = axios.get(`${ROOT_URL}/result?place=${place}`);
//   return {
//     type: TYPES.previous_image,
//     payload: request
//   };
// }

/// export function sendInfo(info) {
  
///   return {
///    type: TYPES.INFO,
///   payload: info
///   };
///}
// export function conectar(place) {
//
//     return function(dispatch) {
//         axios.get(`${ROOT_URL}/result?place=${place}`)
//         .then(request => {
//           console.log('REQUEST',request);
//             dispatch({
//                 type: TYPES.conectar,
//                 payload: request
//             });
//         }).catch((response) => {
//             dispatch(`${response} in action conectar`);
//         });
//     };
// }


// NOTE: POST

// export function getQimList(dataset) {
//
//     return function(dispatch) {
//         axios.post(`${ROOT_URL}/getQimListDataset`,{dataset})
//         .then(request => {
//             dispatch({
//                 type: TYPES.GET_QIMLIST,
//                 payload: request
//             });
//         }).catch((response) => {
//             dispatch(errorMessage(`${response} in action getQimListDataset`));
//         });
//     };
// }
