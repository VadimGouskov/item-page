import React from 'react';
import './app.css'
import Nav from './components/nav';
import ItemFilter from './components/ItemFilter';
import MainSection from './components/MainSection';

const App: React.FC = () => {
  return (
    <div>
        <Nav/>
        <div className="container">    
            <div className="columns app-outer-container">
                <div className="column is-8"><MainSection/></div> 
                <div className="column is-4 filter-container"><ItemFilter/></div>
            </div>
        </div>
    </div>
  );
}

export default App;
