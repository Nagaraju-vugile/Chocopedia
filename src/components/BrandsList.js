import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBrandsListAC, getBrandDetailsAC } from "../actionCreators/brandAC";
import { BrandListItem } from "../components/BrandListItem";

class brandsList extends Component {
  // constructor() {
  //     super();
  //     //this.removeCustomer = this.removeCustomer.bind(this);
  // }
  componentDidMount() {
    this.props.dispatch(getBrandsListAC());
  }

  render() {
    return (
      <div style={{margin:'auto',padding:'50px'}}>
        <h1>Brands List</h1>
        <br />
        {this.props.isLoading && <p>Loading...</p>}
        <div className="columns is-multiline">
          {this.props.brands.map(c => (
            <BrandListItem
              key={c.id}
              id={c.id}
              name={c.name}
              logo={c.logo}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(appState) {
  return {
    brands: appState.brand.brands,
    isLoading: appState.isLoading,
    brandDetails: appState.brand.brandDetails
  };
}
const connectedComponent = connect(mapStateToProps);
export default connectedComponent(brandsList);
