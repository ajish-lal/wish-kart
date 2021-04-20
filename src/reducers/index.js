import { combineReducers } from 'redux';
import MultiWidgetReducer from './MultiWidgetReducer';

const rootReducer = combineReducers({
  multiWidget: MultiWidgetReducer,
})

export default rootReducer;