import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Tag = ({ text }) => (
  <TagWrapper className="mx-1 my-1 px-2 py-1 text-xxs">{text}</TagWrapper>
);

export const LinkTag = ({ text, onClick, isActive }) => (
  <LinkTagWrapper
    className="mx-1 my-1 px-2 py-1 text-xxs"
    onClick={() => onClick(text)}
    isActive={isActive}
  >
    {text}
  </LinkTagWrapper>
);

const TagWrapper = styled.span`
  background-color: #f8f8f8;
  color: #4b75b9;
  border-radius: 3px;
  text-transform: uppercase;
`;

const LinkTagWrapper = TagWrapper.extend`
  background-color: ${props => props.isActive && '#4b75b9'};
  color: ${props => props.isActive && '#f8f8f8'};
  cursor: pointer;
  transition: all ease-in-out 0.25s;

  &:hover {
    background-color: #4b75b9;
    color: #f8f8f8;
  }
`;

Tag.propTypes = {
  text: PropTypes.string
};

LinkTag.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
};
