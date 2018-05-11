import { combineReducers } from 'redux';
import active from './reducer_active_book';

const rootReducer = combineReducers({
    active
});

export default rootReducer;
