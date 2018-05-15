import React from 'react';
import PropTypes from 'prop-types';

import { ColumnContainer } from 'components/reusable/Containers';

const PageHeader = ({ title, description }) => {
  return (
    <Container ai="flex-start" className="p-h-h">
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

const Container = ColumnContainer.extend`
  background-color: #f8f8f8;
  border-radius: 5px;
`;

export default PageHeader;
