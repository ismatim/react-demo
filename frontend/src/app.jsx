import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';
import 'styles/index.scss';

const App = () => (
  <div className='App'>
    <Navigation/>
    <div>
      <h1>Hubble: React + Redux Demonstration</h1>
      <p>Proyecto demonstrativo de las capacidades de React y Redux</p>
    </div>
  </div>
);

export default App;
