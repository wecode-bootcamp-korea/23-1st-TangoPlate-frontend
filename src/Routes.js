import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import FilterList from './pages/FilterList/FilterList';
import ShopList from './pages/ShopList/ShopList';
import ShopDetail from './pages/ShopDetail/ShopDetail';
import ReveiwWritingPage from './pages/ShopDetail/ReveiwWritingPage/ReveiwWritingPage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/FilterList" component={FilterList} />
          <Route exact path="/ShopList" component={ShopList} />
          <Route exact path="/ShopDetail" component={ShopDetail} />
          <Route
            exact
            path="/ShopDetail-reveiwWritingPage"
            component={ReveiwWritingPage}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
