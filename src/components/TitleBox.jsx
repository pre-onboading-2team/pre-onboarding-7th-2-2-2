import React from 'react';
import styled from 'styled-components';

const TitleBox = ({ name }) => {
  return <TitleBoxContainer>{name}</TitleBoxContainer>;
};

export default TitleBox;

const TitleBoxContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #3a474e;
  padding: 1.5rem 2rem;
`;
