//Importes
//CSS
import './App.css';

//React
import React from 'react';

//Router
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Menu from '../components/layouts/Navbar';
import Content from '../components/layouts/Content';

const App = props => (
  <div className='App'>
    <Router>
      <Menu />
      <Content />
    </Router>
  </div>
)

export default App;
