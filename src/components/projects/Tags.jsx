import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Tag = ({ text }) => (
  <span className="bg-off-white text-blue rounded mx-1 my-1 px-2 py-1 text-xxs uppercase">
    {text}
  </span>
);

export const LinkTag = ({ text, onClick, isActive }) => (
  <LinkTagWrapper
    className="rounded mx-1 my-1 px-2 py-1 text-xxs uppercase cursor-pointer transition hover:bg-blue hover:text-off-white"
    onClick={() => onClick(text)}
    isActive={isActive}
  >
    {text}
  </LinkTagWrapper>
);

const LinkTagWrapper = styled.span`
  background-color: ${props => (props.isActive ? '#4b75b9' : '#f8f8f8')};
  color: ${props => (props.isActive ? '#f8f8f8' : '#4b75b9')};
`;

Tag.propTypes = {
  text: PropTypes.string.isRequired
};

LinkTag.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};
