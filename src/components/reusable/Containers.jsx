import styled from 'styled-components';
import PropTypes from 'prop-types';

const RowContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
`;

RowContainer.propTypes = {
  bgColor: PropTypes.string,
  ai: PropTypes.string,
  jc: PropTypes.string
};

RowContainer.defaultProps = {
  bgColor: 'rgba(0, 0, 0, 0)',
  ai: 'center',
  jc: 'center'
};

const ColumnContainer = RowContainer.extend`
  flex-direction: column;
`;

ColumnContainer.defaultProps = RowContainer.defaultProps;

const CircleContainer = ColumnContainer.extend`
  border-radius: 50%;
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
`;

CircleContainer.propTypes = {
  size: PropTypes.number
};

CircleContainer.defaultProps = {
  size: 225,
  ...RowContainer.defaultProps
};

export { RowContainer, ColumnContainer, CircleContainer };
