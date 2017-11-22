import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Row, Column } from 'hedron';

import J from '../../components/J';
import Title from '../../components/Title';

const HomePage = () => {
  return (
    <Row>
      <Column>
        <Title>Meeting</Title>
      </Column>
    </Row>
  );
};

export default HomePage;
