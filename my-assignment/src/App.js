import Home from './pages/home';
import Layout from './components/layout';
import React from 'react';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
    </Provider>
  );
}

export default App;
