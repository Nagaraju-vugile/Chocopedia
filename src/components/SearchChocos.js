import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';


class SearchChocos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.history.push(`/search/?q=${this.state.search}`);
    event.target.value ? this.props.history.push(`/search/?q=${this.state.search}`) :  this.props.history.push(`/`)
    console.log("chocolates list *****",this.state.search);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search/?q=${this.state.search}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="is-flex">
        <input
          className="input"
          type="text"
          name="search"
          placeholder="Search chocolates"
          onChange={this.handleChange}
        />
        <button className="button">search</button>
      </form>
    );
  }
}

function mapStateToProps(state){ 
  return state;
}
export default withRouter(connect(mapStateToProps)(SearchChocos));
