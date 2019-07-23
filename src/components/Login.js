import React, { Component } from 'react';
import {getUsersAC} from "../actionCreators/loginAC";
import {setLoginSuccess} from "../actionCreators/isLoggedInAC";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router'

class GetUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      } 

    componentDidMount() {
        this.props.dispatch(getUsersAC());
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

    handleSubmit(event) {
        event.preventDefault();
        let isLoggedIn=[];
        console.log('user----', this.props.userDetails)
        if(!this.state.username) {
          document.getElementById("error_msg").innerHTML = "Please enter user name.";
          return ;
        }
        if(!this.state.password) {
          document.getElementById("error_msg").innerHTML = "Please enter password.";
          return ;
        }
        isLoggedIn = this.props.userDetails.filter( c=>{
            return c.email === this.state.username && c.password === this.state.password;
        }
        )
        if(isLoggedIn && isLoggedIn.length>0){
            localStorage.setItem('loggedIn', true);
            this.props.dispatch(setLoginSuccess());
            this.props.history.push('/')
        //    return  <Redirect to="/brands"/>
        } else {
          document.getElementById("error_msg").innerHTML = "Please give valid details.";
          this.setState({username: '',
          password: ''})
            
        }   
      }
    
    render() {
        return (
          <div style={{margin:'auto',padding:'70px'}}>
            <form className="form-login-signup" onSubmit={this.handleSubmit} >
            <span id="error_msg" style={{color:'red'}}></span>
            <h1 className="has-text-centered" style={{color:"red"}}>Login</h1>
            <label>
             Username:
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange}  placeholder="Enter username" className="input" />
            </label>
            <br />
            <label>
             Password:
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  placeholder="Enter password" className="input"/>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Submit" className="button is-primary" />&nbsp;&nbsp;&nbsp;
            <span>Not a user?&nbsp;<Link to="/signUp">Register</Link></span>
          </form>
          </div>
          )
}
}

function mapStateToProps(appState) {
    return {
        isLoading: appState.isLoading,
        userDetails:appState.login.users
    };
}
const connectedComponent = connect(mapStateToProps);
export default connectedComponent(GetUsers);
