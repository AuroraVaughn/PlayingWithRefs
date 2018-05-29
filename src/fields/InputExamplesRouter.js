import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

const Button = ({ clickHandler, children }) => (
  <button onClick={clickHandler}>{children}</button>
);

class ClassButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.clickHandler}>{this.props.children}</button>
    );
  }
}

class InputExamplesRouter extends React.Component {
  constructor(props) {
    super(props);
    this.buttonHMTL = null;
    this.functionalButton = null;
    this.classButton;
    this.setHTMLButtonRef = element => {
      this.buttonHMTL = element;
    };
    this.setfunctionalButtonRef = element => {
      this.functionalButton = element;
    };
    this.setClassButtonRef = element => {
      this.classButton = element;
    };
  }
  logRefsOnClick = e => {
    console.log("Target", e.target);
    // console.log("HTML Button ref", this.buttonHMTL);
    // console.log("Functional Component button ref", this.functionalButton);
    console.log("Class Component button ref", this.functionalButton);
  };
  render() {
    return (
      <div>
        <h2>Ref's Dawg</h2>
        <button ref={this.setHTMLButtonRef} onClick={this.logRefsOnClick}>
          HTML BUTTON
        </button>
        <Button
          ref={this.setFunctionaltButtonRef}
          clickHandler={this.logRefsOnClick}
        >
          FUNCTIONAL COMPONENT BUTTON
        </Button>
        <ClassButton
          ref={this.setClassButtonRef}
          clickHandler={this.logRefsOnClick}
        >
          CLASS COMPONENT BUTTON
        </ClassButton>
      </div>
    );
  }
}
export default InputExamplesRouter;
