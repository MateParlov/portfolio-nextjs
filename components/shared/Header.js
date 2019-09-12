/* import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
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
} */

import React from 'react';
import Link from 'next/link';
/* import './../../styles/main.scss';
 */ import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const BsNavlink = ({ link, name, brand }) => {
  return (
    <Link href={link}>
      <a
        className={
          brand ? 'navbar-brand port-navbar-brand' : 'nav-link port-navbar-link'
        }
      >
        {name}
      </a>
    </Link>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Header">
        <Navbar
          className="port-navbar port-default absolute"
          color="transparent"
          light
          expand="md"
        >
          <BsNavlink name="TS" link="/" brand />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavlink name="About" link="/about" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavlink name="Portfolio" link="/portfolio" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavlink name="Blogs" link="/blogs" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavlink name="Cv" link="/cv" />
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="port-navbar-link">
                  Social Sites
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="https://github.com/MateParlov">
                    GitHub
                  </DropdownItem>
                  <DropdownItem>Linkdin</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
