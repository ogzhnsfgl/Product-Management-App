import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import React from "react";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/product" exact component={Dashboard}></Route>
        <Route path="/cart" exact component={CartDetail}></Route>
        <Route
          path="/saveproduct/:productId"
          component={AddOrUpdateProduct}
        ></Route>
        <Route path="/saveproduct/" component={AddOrUpdateProduct}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Container>
  );
}

export default App;
