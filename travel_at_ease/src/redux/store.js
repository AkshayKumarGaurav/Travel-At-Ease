import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk"
// import { reducer as authReducer } from "./authReducer.js/reducer";
import { reducer as productReducer } from "./productReducer/reducer";
import { hotelsReducer } from "./Hotels/hotelReducer";


const rootReducer = combineReducers({
    productReducer,
    hotelsReducer
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))