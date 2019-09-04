import React from 'react';
import { withRouter } from 'next/router';
import BaseLayout from '../components/Layout/BaseLayout';
import axios from 'axios';
class PortfolioDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ query }) {
    const postId = query.id;
    let postData = {};
    let postComments = {};
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const commentsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      postData = response.data;
      postComments = commentsResponse.data.slice(0, 5);
    } catch (error) {
      console.error();
    }
    return { postData, postComments };
  }

  render() {
    const { postData, postComments } = this.props;
    const { id } = this.props.router.query;
    console.log(this.props);
    return (
      <BaseLayout>
        <h2>PortfolioDetails</h2>
        <ul>
          <li>Title : {postData.title}</li>
          <li>Body: {postData.body}</li>
          <li>posted by user : {postData.userId}</li>
          <li>
            Comments:
            <ul>
              {postComments.map(comment => {
                return (
                  <div key={comment.id}>
                    <li>Comment: {comment.body}</li>
                    <li>Posted by: {comment.email}</li>
                  </div>
                );
              })}
            </ul>
          </li>
        </ul>
      </BaseLayout>
    );
  }
}

export default withRouter(PortfolioDetails);
