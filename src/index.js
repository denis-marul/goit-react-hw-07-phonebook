// import React from "react";
// import ReactDOM from "react-dom/client";
// import { App } from "components/App/App.jsx";
// import "./index.css";
// import { Provider } from "react-redux";
// import { store, persistor} from 'redux/store.jsx';
// import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<Provider store={store}>
// 			<PersistGate loading={null} persistor={persistor}>
// 				<App />
// 			</PersistGate>
// 		</Provider>
// 	</React.StrictMode>,
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
