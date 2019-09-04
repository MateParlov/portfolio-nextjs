import React from 'react';
import BaseLayout from '../components/Layout/BaseLayout';
import axios from 'axios';

import { Link } from './../routes';
/* https://jsonplaceholder.typicode.com/posts */
class Portfolio extends React.Component {
  static async getInitialProps() {
    let postData = {};
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      postData = response.data.splice(0, 6);
    } catch (error) {
      console.error();
    }

    return { postData };
  }
  renderPosts(posts) {
    return posts.map(post => {
      return (
        <li key={post.id}>
          <Link route={`/portfolioDetails/${post.id}`} params={{ slug: 'tom' }}>
            <a>{post.title}</a>
          </Link>
        </li>
      );
    });
  }
  render() {
    const { postData } = this.props;

    return (
      <BaseLayout>
        {this.renderPosts(postData)}
        <p>I am Portfolio page</p>
      </BaseLayout>
    );
  }
}

export default Portfolio;
