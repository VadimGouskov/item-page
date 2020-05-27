import React from 'react';
import ItemPage from './components/ItemPage';
import ItemFilter from './components/ItemFilter';
import './app.css'
import Nav from './components/nav';

const App: React.FC = () => {
  return (
    <div>
      <Nav/>
      <ItemFilter/>
      <ItemPage />
    </div>
  );
}

export default App;
