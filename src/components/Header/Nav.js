import emojione from 'emojione';
import React, { PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import { Row, Column } from 'hedron';

import Button from '../Button';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import Nav from '../Nav';

const PageHeader = styled.section`
  text-align: center;
`;

const svg = styled.img`
  width: 250px;
`;

const Navigation = ({ signIn, signOut, auth, user }) => {
  let loginLogoutLink = auth.isLogged
    ? <LogoutLink signOut={signOut} />
    : <LoginLink action={signIn} />;
  return (
    <Nav>
      <IndexLink to='/' activeClassName='active'>
        <Button activeClassName='active'>Meeting</Button>
      </IndexLink>
      <Link to='/about' activeClassName='active'>
        <Button activeClassName='active'>Meeting 2</Button>
      </Link>
      <Link to='/protected' activeClassName='active'>
        <Button activeClassName='active'>Restricted</Button>
      </Link>
      {loginLogoutLink}
    </Nav>
  );
};

Navigation.propTypes = {
  auth: React.PropTypes.object.isRequired,
  signIn: React.PropTypes.func.isRequired,
  signOut: React.PropTypes.func.isRequired,
  user: React.PropTypes.object.isRequired,
};

export default Navigation;
