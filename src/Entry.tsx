import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const Entry = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </>
  );
};

export default Entry;
