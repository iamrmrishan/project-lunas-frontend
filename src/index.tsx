import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from 'routes';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './providers/theme-provider';
import store, { persistor } from '../src/redux/store';
import { Provider } from 'react-redux';
import ScreenSizeProvider from 'providers/screensize-provider';
import { AuthProvider } from 'providers/auth-provider';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <AuthProvider>
      <ThemeProvider>
        <ScreenSizeProvider>
          <BrowserRouter>
            <PageRoutes>
              <App />
            </PageRoutes>
          </BrowserRouter>
        </ScreenSizeProvider>
      </ThemeProvider>
      </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
