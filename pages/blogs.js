import React from 'react';
import BaseLayout from '../components/Layout/BaseLayout';
import BasePage from '../components/BasePage';

class Blogs extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <p>I am Blogs page</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Blogs;
