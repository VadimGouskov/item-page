import React from 'react';
import ProductPage from './components/ProductPage';
import ProductFilter from './components/ProductFilter';

const App: React.FC = () => {
  return (
    <div>
      <ProductFilter/>
      <ProductPage />
    </div>
  );
}

export default App;
