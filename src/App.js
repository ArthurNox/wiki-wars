import React from 'react';

import './css/pure-min.css';
import './css/components.css';

import FilmContent from './components/FilmContent'

function App() {
  return (
    <div id="layout">
        <div id="main">              
          <div className="header">
              <h1>Star Wars Wiki</h1>
              <h2>A Guide to the Star Wars Film Franchise</h2>
          </div>

          <FilmContent />
        </div>
    </div>
  );
}

export default App;
