import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from './components/layout';
import Home from './pages/home';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Home />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
