import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './ducks';
import { getcharactersFromEpisodeRange } from './tempApi';

getcharactersFromEpisodeRange(2, 5);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
