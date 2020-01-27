import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getReplies, deleteReply } from "../../actions/replies";
import axios from "axios";

export class Replies extends Component {
  static propTypes = {
    replies: PropTypes.array.isRequired,
    getReplies: PropTypes.func.isRequired,
    deleteReply: PropTypes.func.isRequired
  };

  componentDidMount() {
    /*const {
      match: { params }
    } = this.props;
    axios
    .get(`/api/threads/${params.threadId}`)
    .then(({ data: thread }) => {
      console.log('thread', thread);
      this.setState({ thread });
    });*/
    this.props.getReplies();
  }

  render() {
    return (
      <Fragment>
        <h2> Replies </h2>{" "}
        <table className="table table-striped">
          <thead>
            <tr>
              <th> ID </th> <th> Text </th>
              <th />
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {this.props.replies.map(reply => (
              <tr key={reply.id}>
                <td> {reply.id} </td>
                <td> {reply.text} </td>
                <td>
                  <button
                    onClick={this.props.deleteReply.bind(this, reply.id)}
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
  replies: state.replies.replies
});

export default connect(mapStateToProps, { getReplies, deleteReply })(Replies);
