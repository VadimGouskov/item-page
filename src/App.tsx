import React from 'react';
import ItemPage from './components/ItemPage';
import ItemFilter from './components/ItemFilter';
import './app.css'
import Nav from './components/nav';

const App: React.FC = () => {
  return (
    <div>
      <Nav/>
      <div className="container">
        <div className="columns app-columns-outer-container">
          <div className="column is-8"><ItemPage/></div> 
          <div className="column is-4"><ItemFilter/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
