import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './paginas/Home';
import PaginaDeBebida from './paginas/PaginaDeBebida';
import Error from './paginas/Error';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cocktail/:id' component={PaginaDeBebida} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
