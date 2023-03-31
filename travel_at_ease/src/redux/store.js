import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
// import { reducer as authReducer } from "./authReducer.js/reducer";
import { reducer as productReducer } from "./productReducer/reducer";
import { hotelsReducer } from "./Hotels/hotelReducer";
import { reducer as flightReducer } from "./flightReducer/reducer";


const rootReducer = combineReducers({
    productReducer,
    hotelsReducer,
    flightReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))