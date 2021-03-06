import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import classnames from 'classnames';

const Header = (props) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><NavLink className="nav-link" to="/encryptor-decryptor/" ><font color="secondary"><h3>Encryptor-Decryptor</h3></font></NavLink></NavbarBrand>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === 'tab1' })}
              onClick={() => { toggle('tab1'); }}
              className="nav-link"
              to="/encryptor-decryptor/encrypt"
            >
              Encrypt
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === 'tab2' })}
              onClick={() => { toggle('tab2'); }}
              className="nav-link"
              to="/encryptor-decryptor/decrypt"
            >
              Decrypt
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
