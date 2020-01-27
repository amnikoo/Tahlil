import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getThreads, deleteThread } from "../../actions/threads";
import { Redirect, Link } from "react-router-dom";

export class Threads extends Component {
  static propTypes = {
    threads: PropTypes.array.isRequired,
    getThreads: PropTypes.func.isRequired,
    deleteThread: PropTypes.func.isRequired
  };

  componentDidMount() {
    /*const {
      match: { params }
    } = this.props;*/
    this.props.getThreads();
  }

  render() {
    return (
      <Fragment>
        <h2> Threads </h2>{" "}
        <table className="table table-striped">
          <thead>
            <tr>
              <th> ID </th> <th> Title </th> <th> Text </th>
              <th />
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {this.props.threads.map(thread => (
              <tr key={thread.id}>
                <td> {thread.id} </td>
                <td> {thread.title} </td>
                <td> {thread.text} </td>
                <Link to="/reply">
                  <td width="200">Reply</td>
                </Link>
                <Link to={"/viewReplies"}>
                  <td width="200">View Replies</td>
                </Link>
                <td>
                  <button
                    onClick={this.props.deleteThread.bind(this, thread.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}{" "}
          </tbody>{" "}
        </table>{" "}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  threads: state.threads.threads
});

export default connect(mapStateToProps, { getThreads, deleteThread })(Threads);
