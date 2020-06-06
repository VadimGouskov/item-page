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
        <div className="columns app-outer-container">
           <div className="column is-8 item-container"><ItemPage/></div> 
           <div className="column is-4 filter-container"><ItemFilter/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
