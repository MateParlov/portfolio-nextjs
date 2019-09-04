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
import {
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">TS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portfolio">Porfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blogs">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cv">Cv</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
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
