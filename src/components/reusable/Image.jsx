import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
  border-top: ${props => !props.noBorder && '3px solid #d9b310'};
  border-bottom: ${props => !props.noBorder && '3px solid #d9b310'};
  height: ${props => props.height && `${props.height}px`};
  width: ${props => props.width && `${props.width}px`};
`;

Image.propTypes = {
  noBorder: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number
};

export default Image;
