import React from 'react';
import BaseLayout from '../components/Layout/BaseLayout';
import BasePage from '../components/BasePage';

class About extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage className="about-page">
          <h1>I am about Page</h1>;
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
