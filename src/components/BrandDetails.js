import React, { Component } from 'react'
import {  getBrandDetailsAC  } from "../actionCreators/brandAC";
import { connect } from "react-redux";

 class BrandDetails extends Component {
    componentDidMount() {
        // console.log("DATA-LOGO:",this.props)
        this.props.dispatch(getBrandDetailsAC(this.props.match.params.id));
      }
    render() {
        const brandId1 = this.props.match.params.id;
        let brandName='';
        // console.log("brand details******",this.props.brandDetails.brands)
        // console.log("brand details id******",this.props.match.params.id)
        this.props.brandDetails.brands.map(brandDetail =>{
            brandName = brandId1==brandDetail.id ? brandDetail.name :brandName
        })
        // console.log("brand Name*******",brandName);
        return (
        <div style={{margin:'auto',padding:'50px'}}>
          <h1>Chocolates list of <b>{brandName}</b> type:</h1>    
              {!this.props.brandDetails.brandDetails.length && <h1 className="has-text-centered is-italic" style={{color:"red"}}>Oops! no chocolates found!</h1>}
              <div className="columns is-multiline">
                {this.props.brandDetails.brandDetails.map(brandDetail =>(
                <div className="box column is-one-third"> 
                <div><b>{brandDetail.name}</b></div>
                <div>{brandDetail.desc}</div>
                <div><img src={brandDetail.image} alt=""/></div>
                </div>
            ))}
                
            </div>
            </div>
        )
    }
}


function mapStateToProps(appState) {
    console.log("mapStateToProps", appState);
    return {
        isLoading: appState.isLoading,
        brandDetails: appState.brand
        //chocolatesByBrand:appState.chocolatesByBrand
    };
}
const connectedComponent = connect(mapStateToProps);
export default connectedComponent(BrandDetails);
