import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

const AuthorizedRoute = (props) => {
  // console.log(props);
    if(!props.isLoggedIn){
      props.history.push("/login");
      return null;
    }
    return React.cloneElement(props.children, {...props});
}

function mapStateToProps(state){
    console.log(state);
    return state;
}
export default withRouter(connect(mapStateToProps)(AuthorizedRoute));
