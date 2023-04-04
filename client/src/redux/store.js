import { applyMiddleware} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import reduxThunk from 'redux-thunk'
import rootReducer from "./root-reducer"

const middlewares=[reduxThunk]

const store=configureStore({reducer: rootReducer},applyMiddleware(...middlewares));


export default store;