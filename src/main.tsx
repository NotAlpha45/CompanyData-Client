import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/styles/index.scss";
import { Provider } from 'react-redux';
import { appStore } from './stores/redux-store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
