import React from 'react';
import './App.css';
import { Switch, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import {AnimatePresence} from 'framer-motion';
import GlobalStyle from './globalStyles';

function App() {
  let location=useLocation();
  return (
  <>
    <GlobalStyle />
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
    </Switch>
    </AnimatePresence>
  </>
  );
}

export default App;
