import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TimeAgo from 'javascript-time-ago'
import { Provider } from "react-redux";
import store from './redux/store';


import en from 'javascript-time-ago/locale/en.json'



TimeAgo.addDefaultLocale(en)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
</Provider>
</React.StrictMode>
);



