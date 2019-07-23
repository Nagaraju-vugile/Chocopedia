import React, { Component } from 'react'
import { getChocolatesDetailsAC } from "../actionCreators/brandAC";
import { connect } from "react-redux";


class ChocolatesDetails extends Component {
    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(getChocolatesDetailsAC(this.props.match.params.id));
    }
    render() {
        return (
            <div style={{margin:'auto',padding:'50px'}}>
                <h1>{this.props.chocolateDetails.name}:</h1>
                    <div className="box">
                        <div>
                            <b>{this.props.chocolateDetails.name}</b>
                        </div>
                        <div>
                            {this.props.chocolateDetails.desc
                        }</div>
                        <img src={this.props.chocolateDetails.image} alt=""/>
                    </div>
              </div>
          )
}
}

function mapStateToProps(appState) {
    console.log("mapStateToProps", appState);
    return {
        isLoading: appState.isLoading,
        //brandDetails: appState.ChocolatesDetails,
        chocolateDetails:appState.brand.chocolatesByBrand
    };
}
const connectedComponent = connect(mapStateToProps);
export default connectedComponent(ChocolatesDetails);
