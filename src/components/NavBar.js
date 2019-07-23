import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setLogoutSuccess } from "../actionCreators/isLoggedInAC";
import SearchChoco from "../components/SearchChocos";

const LoggedInLinks = props => (
  <div className="navbar-start" style={{paddingRight:'100px',right:'10px',position:'fixed',margin:'5px;',paddingTop:'5px'}}>
    <div className="navbar-item" style={{paddingLeft:'100px',left:'10px',position:'fixed',margin:'5px;',paddingTop:'0px'}}>
    <li>
      <NavLink
        to="/"
        className="navbar-item"  style={{color:'white'}}
        // style={{color:'white',left:'100px', position:'fixed'}}
        activeStyle={{ color: "red", backgroundColor: "yellow" }}
        exact
      >
        Home
      </NavLink>{" "}
    </li>{" "}
    <li>
      <NavLink
        to="/brands"
        className="navbar-item"  style={{color:'white'}}
        activeStyle={{ color: "red", backgroundColor: "yellow" }}
        exact
      >
        Brands{" "}
      </NavLink>{" "}
    </li>{" "}
    <li>
      <NavLink
        to="/chocolates"
        className="navbar-item"  style={{color:'white'}}
        activeStyle={{ color: "red", backgroundColor: "yellow" }}
        exact
      >
        Chocolates
      </NavLink>{" "}
    </li>{" "}
</div>
    <SearchChoco />
    <li>
      <NavLink
        to="/login"  style={{color:'white'}}
        activeStyle={{ color: "red", backgroundColor: "yellow" }}
        className="navbar-item"
        onClick={() => {
          props.dispatch(setLogoutSuccess());
        }}
      >
        Logout{" "}
      </NavLink>{" "}
    </li>{" "}
  </div>
);

const LoggedOutLinks = () => (
  <div className="navbar-start" style={{paddingRight:'100px',right:'10px',position:'fixed',margin:'5px;',paddingTop:'7px'}}>
     {/* style={{right:'5px',position:'fixed', margin:'5px'}} */}
    <li>
      <NavLink
        className="navbar-item"
        to="/login" style={{color:'white'}}
        activeStyle={{ color: "red", backgroundColor: "yellow" }}
        exact
      >
        Login{" "}
      </NavLink>{" "}
    </li>{" "}
    <li>
      <NavLink
        to="/signUp"
        className="navbar-item" style={{color:'white'}}
        activeStyle={{ color: "red", backgroundColor: "yellow" }}
        exact
      >
        Sign Up{" "}
      </NavLink>{" "}
    </li>{" "}
  </div>
);

function NavBar(props) {
  const { loggedIn } = props;
  console.log(loggedIn);
  return (
    <nav className="navbar" style={{backgroundColor:'red',width:'85%',position:'fixed'}}>
      <ul> {loggedIn ? <LoggedInLinks {...props} /> : <LoggedOutLinks />} </ul>{" "}
    </nav>
  );
}

export default connect(state => ({ loggedIn: state.isLoggedIn }))(NavBar);
