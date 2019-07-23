import React, { Component } from 'react';
import { connect } from "react-redux";

import { registerUserAC } from '../actionCreators/signUpAC';

 class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            email: '',
            password: '',
          };
          this.handleChange = this.handleChange.bind(this);
      }
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        
      }
    
      handleSubmit = (event) => {
        event.preventDefault(); 
        let value = Object.keys(this.state).map(key =>{
          if(key === 'lastname') return key;
          if(!this.state.firstname) {
            document.getElementById("error_msg").innerHTML = "Please enter first name";
            return null ;
          }
          if(!this.state.email) {
            document.getElementById("error_msg").innerHTML = "Please enter email.";
            return null ;
          }
          if(!this.state.password) {
            document.getElementById("error_msg").innerHTML = "Please enter password.";
            return null ;
          }
          return key;
          });
          // debugger;
          value = value.filter(v => v? true: false);
          if(value.length !== 4) return;
        this.props.dispatch(registerUserAC(this)); 
        // console.log("after dispatch******",this);
        this.props.history.push("/login");
      }

    render() {
      console.log("render start***",this.props)
        return (
          <div style={{margin:'auto',padding:'70px'}}>    
            <form className="form-login-signup" onSubmit={this.handleSubmit}>
            <span id="error_msg" style={{color:'red'}}></span>
              <h1 className="has-text-centered" style={{color:"red"}}>Sign up</h1>
               <label>
              <span style={{color:'red'}}>*</span>First name:
              <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="Enter firstname" className="input"/>
            </label>
            <br />
            <label>
              Last name:
              <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}  placeholder="Enter lastname" className="input"/>
            </label>
            <br />
            <label>
            <span style={{color:'red'}}>*</span>email:
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange}  placeholder="Enter email" className="input"/>
            </label>
            <br />
            <label>
            <span style={{color:'red'}}>*</span>Password:
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  placeholder="Enter password" className="input"/>
            </label>
            <br />
            <br />
           <button type="submit" className="button is-primary">Submit</button>
          </form>
          </div>
          )
}
}

function mapStateToProps(appState) {
    console.table("mapStateToProps***", appState);
    return {
      isLoading:true  
    };
}
export default connect(mapStateToProps)(RegisterUser);

