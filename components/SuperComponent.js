import React from 'react';
import BaseLayout from '../components/Layout/BaseLayout';

class SuperComponent extends React.Component {
  constructor() {
    super();

    this.someVariable = 'Just some variable';
  }

  alertName(title) {
    alert(title);
  }
  render() {
    return (
      <BaseLayout>
        <p>I am SuperComponent page</p>
      </BaseLayout>
    );
  }
}

export default SuperComponent;
