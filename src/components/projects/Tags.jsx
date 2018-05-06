import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

export const Tag = ({ text }) => (
  <TagWrapper className="m-h-q m-v-q p-h-q font-small">{text}</TagWrapper>
);

export const LinkTag = ({ text, onClick, isActive }) => (
  <LinkTagWrapper
    className="m-h-q m-v-q p-h-q font-small"
    onClick={() => onClick(text)}
    isActive={isActive}
  >
    {text}
  </LinkTagWrapper>
);

const TagWrapper = styled.span`
  background-color: #f8f8f8;
  color: #328cc1;
  border-radius: 3px;
  text-transform: uppercase;
`;

const LinkTagWrapper = TagWrapper.extend`
  background-color: ${props => props.isActive && '#328cc1'};
  color: ${props => props.isActive && '#f8f8f8'};
  cursor: pointer;
  transition: all ease-in-out 0.25s;

  &:hover {
    background-color: #328cc1;
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
