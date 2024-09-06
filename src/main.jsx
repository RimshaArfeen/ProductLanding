import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-pc0eb472bmdytkn6.us.auth0.com"
    clientId="kn2Wu2jeo2YaMcAey5z7TMj2m9cqPtpS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
   
)
