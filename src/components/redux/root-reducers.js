import {reducer as cofeeReducer} from './models/cofee/reducer';
import {combineReducers} from 'redux';
const reducer = combineReducers({
  cofee: cofeeReducer,
});

export {reducer};
