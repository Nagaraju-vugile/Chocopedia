import React, { Component } from "react";
import { render } from "react-saga";
import { connect } from "react-redux";
import { getChocolatesListAC } from "../actionCreators/brandAC";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getChocolatesListAC());
    if (!this.props.isLoggedIn) {
      this.props.history.push("/login");
      return null;
    }
  }
  render() {
    return (
      <div style={{margin:'auto',padding:'100px'}}>
        <h1 className="has-text-centered is-italic" style={{ color: "red" }}>
          Welcome to Chocolate Factory!
        </h1>
        <img  className="" src="../images/choco1.jpg" alt="choco" style={{marginLeft:'0', padding:'50px,', maxWidth:'50%'}} />
        <img  className="" src="../images/choco1.jpg" alt="choco" style={{marginLeft:'0', padding:'50px,', maxWidth:'50%'}} />
      </div>
    );
  }
}

function mapStateToProps(appState) {
  console.log("appState*******", appState);
  return {
    isLoggedIn: appState.isLoggedIn,
    chocolateDetails: appState.brand.chocolateDetails
  };
}
const connectedComponent = connect(mapStateToProps);
export default connectedComponent(Home);
