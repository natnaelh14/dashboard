import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { dashboardReducer } from './reducers/dashboardReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const dashboardFromStorage = localStorage.getItem('dashboard')
  ? JSON.parse(localStorage.getItem('dashboard'))
  : [];

export const initialState = {
  dashboard: dashboardFromStorage,
};

const rootReducer = combineReducers({
  dashboards: dashboardReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
