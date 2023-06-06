import React from 'react';
import ReactDOM from 'react-dom';
//import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

//store & provider & redux-persist
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';


//app
import { App } from './components/App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


/* ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter >
        <App />
      </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
 */