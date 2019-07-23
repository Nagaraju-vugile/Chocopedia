import React, { Component } from "react";
import { connect } from "react-redux";
import ChocolateListItem from "./ChocolateListItem";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      matchedChocolates: []
    };
  }
  componentDidMount() {
    this.search();
  }
  componentDidUpdate(prevProps) {
      if(prevProps.location.search.substr(3) !== this.props.location.search.substr(3)) {
        this.search();
      }
  }

  search() {
    let searchParam = window.location.search.substr(3);
    let { chocolates } = this.props;
    let matchedChocolates = chocolates.filter(c =>
      c.name.toLowerCase().includes(searchParam.toLowerCase())
    );
    this.setState({
        matchedChocolates
    })
    console.log("matched chocolates*****",matchedChocolates);
  }

  render() {
    const { matchedChocolates } = this.state;
    return (
      <div style={{margin:'auto',padding:'50px'}}>
        <h1>Search Results:</h1>
        <br />
        {!matchedChocolates.length && <h1 className="has-text-centered is-italic" style={{color:"red"}}>Oops! no chocolates found!</h1>}
        <div className="columns is-multiline is-one-third">
        {console.log("matchedChocolates.length",matchedChocolates.length)}
        {!!matchedChocolates.length &&
          matchedChocolates.map(c => {
            return (
              <ChocolateListItem
                key={c.id}
                id={c.id}
                name={c.name}
                image={c.image}
              />
            );
          })}
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { chocolates: state.brand.chocolateDetails };
}
export default connect(mapStateToProps)(Search);
