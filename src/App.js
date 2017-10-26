import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class App extends Component {
  state = {
    response: "",
    event: ""
  };

  responseFacebook = response => {
    console.log(response);
  };

  componentClicked = event => {};

  render() {
    return (
      <center>
        <FacebookLogin
          size="medium"
          appId="135019927149197"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook"
          language="th_TH"
        />
      </center>
    );
  }
}

export default App;
