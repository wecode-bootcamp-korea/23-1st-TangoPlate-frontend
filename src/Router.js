import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import FillterList from "./pages/fillterList/FillterList";
import ShopList from "./pages/shopList/ShopList";
import ShopDetail from "./pages/shopDetail/ShopDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/FilterList" component={FillterList} />
          <Route exact path="/ShopList" component={ShopList} />
          <Route exact path="/ShopDetail" component={ShopDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
