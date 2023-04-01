import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Auth0Provider
      domain="travelatease.us.auth0.com"
      clientId="3CgbPO304D5OTAiCA0Lkl1KwmxA5pMUC"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}  
    >
  <BrowserRouter>
    <ChakraProvider>
    <Provider store={store}>
    
      <App />
    </Provider>
    </ChakraProvider>
  </BrowserRouter>
   </Auth0Provider>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
