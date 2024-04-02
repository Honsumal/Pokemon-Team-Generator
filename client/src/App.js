import React, {useState} from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/Home';
import NavTabs from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [currentApp, setCurrentApp] = useState('Home');

  const renderApp = () => {
    switch(currentApp) {
      case "Individual":
        return <Home />
      default:
        return <Home />
    }
  }

  const handleAppChange = (app) => setCurrentApp(app)

  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <NavTabs currentApp={currentApp} handleAppChange={handleAppChange}/>
        <div className="container">
          {renderApp()}
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
