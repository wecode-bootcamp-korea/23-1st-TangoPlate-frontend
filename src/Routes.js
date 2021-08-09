import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import FilterList from './pages/FilterList/FilterList';
import ShopList from './pages/ShopList/ShopList';
import Nav from './components/Nav/Nav';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/filterlist" component={FilterList} />
          <Route exact path="/shoplist" component={ShopList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
