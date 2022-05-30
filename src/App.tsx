import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/css/style.css';
import { theme } from './assets/style/themes/theme1';
import { ThemeStyledProvider } from './components/core/theme/Context';
import { configureStore } from './redux/store';
import Routes from './routes/Routes';
//import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Provider store={configureStore({})}>
      <ThemeStyledProvider theme={theme}>
        <Suspense fallback={<>...</>}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Suspense>
      </ThemeStyledProvider>
    </Provider>
  );
}


export default App;
