import { persistCombineReducers } from 'redux-persist'
// import { combineReducers } from 'redux';
import main from './main';
import localForage from 'localforage'
// import storage from 'redux-persist/es/storage'

const reducers = {
    main
}

const config = {
  key: 'root',
  storage: localForage
}

var rootReducer = persistCombineReducers(config, reducers)

export default rootReducer
