import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../components/layouts/Navbar';
import Contents from '../components/layouts/Contents';

const App = props => (
  <div className='App'>
    <Router>
      <Navbar />
      <Contents />
    </Router>
  </div>
)

export default App