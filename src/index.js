import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store} from './Redux/store';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './index.css'; // Import your CSS file
import App from './App';
// import { ConfigProvider } from "antd";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <BrowserRouter>
          <App />
      </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
