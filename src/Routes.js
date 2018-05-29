import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import { InputExamplesRouter } from "./fields";

const Aux = ({ children }) => children;

class Routes extends Component {
  render() {
    console.log(InputExamplesRouter);
    return (
      <Aux>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/textRefs" component={InputExamplesRouter} />
        </Switch>
      </Aux>
    );
  }
}
export default withRouter(Routes);
