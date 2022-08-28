// cra imports
import React, {useMemo} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals.js';

// import redux requirements
import {Provider} from 'react-redux';
import {PersistGate} from 'reduxjs-toolkit-persist/integration/react';
import {store, persistedStore} from 'store.js';

// import html head tags requirements
import {Helmet} from 'react-helmet';
import {REACT_HELMET_PROPS} from 'config.js';


// import toastify for notification
import {Slide, ToastContainer} from 'react-toastify';
import {BrowserRouter as Router} from "react-router-dom";
// mock server register for demo
import App from "./App";
import {DataProvider} from "./data/DataProvider";

const Main = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <Helmet {...REACT_HELMET_PROPS} />
                <ToastContainer transition={Slide} newestOnTop/>
                <DataProvider>
                    <Router basename={process.env.REACT_APP_BASENAME}>
                        <App/>
                    </Router>
                </DataProvider>
            </PersistGate>
        </Provider>
);
};

ReactDOM.render(
    <Main/>
, document.getElementById('root'));

/*
* If you want to start measuring performance in your app, pass a function
* to log results (for example: reportWebVitals(console.log))
* or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
reportWebVitals();
