import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ColumnContainer } from 'components/reusable/Containers';
import Image from 'components/reusable/images/Image';

const EmptyState = ({ text }) => {
  return (
    <ColumnContainer>
      <ErrorText>{text}</ErrorText>
      <Image
        src="https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_100/v1525502086/website/emptystate.jpg"
        height={350}
        width={350}
        alt={text}
      />
    </ColumnContainer>
  );
};

const ErrorText = styled.p``;

EmptyState.propTypes = {
  text: PropTypes.string
};

export default EmptyState;
