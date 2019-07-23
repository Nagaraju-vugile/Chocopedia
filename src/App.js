import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import BrandsList from "./components/BrandsList";
import BrandDetails from "./components/BrandDetails";
import ChocolatesList from "./components/ChocolatesList";
import ChocolatesDetails from "./components/ChocolatesDetails";
import GetUsers from "./components/Login";
import RegisterUser from "./components/SignUp";
import Search from "./components/Search";
import Home from "./components/Home";
import AuthorizedRoute from "./components/AuthorizedRoute";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/brands"
          exact
          render={() => (
            <AuthorizedRoute>
              <BrandsList />
            </AuthorizedRoute>
          )}
        />
        <Route path="/search" exact render={() => (
            <AuthorizedRoute>
              <Search />
            </AuthorizedRoute>
          )}/>
        <Route
          exact
          path="/brands/:id"
          render={props => {
            return <BrandDetails {...props} />;
          }}
        />{" "}
        <Route
          path="/chocolates"
          exact
          render={() => (
            <AuthorizedRoute>
              <ChocolatesList />
            </AuthorizedRoute>
          )}
        />{" "}
        <Route exact path="/chocolates/:id" component={ChocolatesDetails} />{" "}
        <Route exact path="/login" component={GetUsers} />{" "}
        <Route exact path="/signUp" component={RegisterUser} />{" "}
      </Switch>{" "}
      <div style={{position:"fixed",left:0,bottom:1,width:'100%', height:'7%', backgroundColor:"#e3eaea",textAlign:"center"}}>
          <p>@copyrights Chocolates factory @2019</p>
        {/* <p style={{position:'fixed',left:0, bottom:0}}>chocolates app.</p>
        <p style={{position:'fixed',right:0, bottom:0,backGroundColor:"grey"}}>@copyrights Chocolates factory @2019</p> */}
      </div>
    </div>
    
  );
}

export default App;
