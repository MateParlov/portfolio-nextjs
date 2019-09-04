import React from 'react';
import Link from 'next/link';
import './../../styles/main.scss';
class Header extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <React.Fragment>
        <a className="customClass">I am styled P element</a>
        <a className="customClassFromFile">I am styled P element</a>
        <br />
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/portfolio">
          <a>Porfolio</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/cv">
          <a>Cv</a>
        </Link>

        <style jsx>{`
          a {
            font-size: 20px;
          }
          .customClass {
            color: red;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Header;
