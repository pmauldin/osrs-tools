import { combineReducers } from 'redux';
import questReducers from "./questReducers";

const rootReducer = combineReducers({
    quests: questReducers
});

export default rootReducer;