import React from 'react';
import ItemPage from './components/ItemPage';
import ItemFilter from './components/ItemFilter';

const App: React.FC = () => {
  return (
    <div>
      <ItemFilter/>
      <ItemPage />
    </div>
  );
}

export default App;
