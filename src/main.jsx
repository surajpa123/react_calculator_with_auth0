import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux"
import {store} from "./Components/Redux/store"
import {BrowserRouter} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react'
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientID =  process.env.REACT_APP_AUTH0_CLIENT_ID;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain= "dev-qv6bdo2w.us.auth0.com"
    clientId= "dFTyfFosxBNaDNHPgCfWmLTKyI8oDySv"
    redirectUri={window.location.origin}
    >
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
)
