import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addReply } from "../../actions/replies";
import { Redirect } from "react-router-dom";

export class Reply extends Component {
  state = {
    text: "",
    redirect: false
  };

  static propTypes = {
    addReply: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    //console.log("submit");
    const { text } = this.state;
    const reply = { text };
    this.props.addReply(reply);
    this.setState({
      text: "",
      redirect: true
    });
  };

  render() {
    const { text, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Reply</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Text</label>
            <textarea
              className="form-control"
              type="text"
              name="text"
              onChange={this.onChange}
              value={text}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addReply })(Reply);
