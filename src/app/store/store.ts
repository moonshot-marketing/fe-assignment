import {configureStore, combineReducers} from '@reduxjs/toolkit';
import episodesReducer from './episodesSlice';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  episodes: episodesReducer,
});

const persistConfig = {
  key: 'rickAndMortyState',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
