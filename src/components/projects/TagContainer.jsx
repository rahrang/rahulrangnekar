import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { RowContainer, ColumnContainer } from 'components/reusable/Containers';
import ClearButton from 'components/reusable/buttons/ClearButton';

const TagContainer = ({ children, onClear }) => {
  return (
    <ColumnContainer className="m-v-h" ai="flex-start">
      <Name>Tags</Name>
      <RowContainer jc="flex-start">
        {children}
        <ClearButton onClick={() => onClear('')} />
      </RowContainer>
    </ColumnContainer>
  );
};

const Name = styled.span`
  color: #0b3c5d;
  text-transform: capitalize;
`;

TagContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  onClear: PropTypes.func
};

export default TagContainer;
