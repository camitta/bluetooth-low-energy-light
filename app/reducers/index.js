//combineReducers here

import colorsReducer from './colorsReducer';

const rootReducer = combineReducers({
	color: colorsReducer
});

export default rootReducer;
