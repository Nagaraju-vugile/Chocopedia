import React, { Component } from "react";
import { connect } from "react-redux";
// import {Link } from "react-router-dom";
import {
  getChocolatesListAC,
  getChocolatesDetailsAC
} from "../actionCreators/brandAC";
import ChocolateListItem from "./ChocolateListItem";
class chocolatesList extends Component {
  // constructor() {
  //     super();
  //     //this.removeCustomer = this.removeCustomer.bind(this);
  // }
  componentDidMount() {
    this.props.dispatch(getChocolatesListAC());
  }

  handleChocolateDetails = id => {
    this.props.dispatch(getChocolatesDetailsAC(id));
  };

  render() {
    // console.log(this.props)
    return (
      <div style={{margin:'auto',padding:'50px'}}>
        <h1>Chocolates List</h1>
        <br/>
        <div className="columns is-multiline">
          {this.props.isLoading && <p>Loading...</p>}
          {this.props.chocolateDetails &&
          this.props.chocolateDetails.map(c => (
            <ChocolateListItem
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              handleChocolate={this.handleChocolateDetails}
            />
            ))}
          </div>
      </div>
    );
  }
}

function mapStateToProps(appState) {
  // console.log("mapStateToProps", appState);
  return {
    brands: appState.brands,
    isLoading: appState.isLoading,
    chocolateDetails: appState.brand.chocolateDetails
  };
}
const connectedComponent = connect(mapStateToProps);
export default connectedComponent(chocolatesList);
