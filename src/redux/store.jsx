import { configureStore } from '@reduxjs/toolkit';
import contsctsReducers from './contsctsReducers';
import filterReducer from './filterReducer';

export const store = configureStore({
  reducer: {
    contacts: contsctsReducers,
    filter: filterReducer,
  },
});

// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import contactSlice from './contactsSlice';
// import filterReducer from './filterReducer';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'reduxjs-toolkit-persist';
// import storage from 'reduxjs-toolkit-persist/lib/storage';

// const combContactsReducer = combineReducers({
//   contacts: contactSlice,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedContactsReducer = persistReducer(
//   persistConfig,
//   combContactsReducer
// );

// const store = configureStore({
//   reducer: persistedContactsReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);

// export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from 'service/ContactsAPI';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import  filterReducer  from 'redux/filterReducer';
// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
// });

// setupListeners(store.dispatch)
