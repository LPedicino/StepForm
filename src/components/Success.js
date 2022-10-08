import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success" />
          <h1>Thank You Your Submission</h1>
          <p>You will get an Email with further instructions</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
