import React from 'react';
import BaseLayout from '../components/Layout/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      userData = response.data;
    } catch (error) {
      console.log(error);
    }

    return { initialData: [1, 2, 3, 4], userData };
  }

  constructor(props) {
    super(props);

    this.state = {
      title: 'I am Index page'
    };
    this.updateTitle = this.updateTitle.bind(this);
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate() {
    console.log('did update');
  }
  componentWillUnmount() {
    console.log('will unmount');
  }

  updateTitle() {
    this.setState({ title: 'updated Title' });
  }

  render() {
    const { title } = this.state;
    const { initialData, userData } = this.props;

    return (
      <BaseLayout>
        <h1>I am class index</h1>
        <h2>{title}</h2>

        <button onClick={this.updateTitle}>Change Title</button>
      </BaseLayout>
    );
  }
}

export default Index;
