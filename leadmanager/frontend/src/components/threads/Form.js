import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addThread } from "../../actions/threads";
import { Redirect } from "react-router-dom";

export class Form extends Component {
  state = {
    title: "",
    text: "",
    redirect: false
  };

  static propTypes = {
    addThread: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    //console.log("submit");
    const { title, text } = this.state;
    const thread = { title, text };
    this.props.addThread(thread);
    this.setState({
      title: "",
      text: "",
      redirect: true
    });
  };

  render() {
    const { title, text, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Make a Thread</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
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

export default connect(null, { addThread })(Form);
