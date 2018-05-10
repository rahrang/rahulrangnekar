import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MAP from 'utils/iconMap';

const Icon = ({ iid, scale, maxHeight, maxWidth }) => {
  const calcDimensions = () => {
    if (scale) return { height: `${scale}%`, width: `${scale}%` };
    if (maxHeight) return { height: `${maxHeight}px` };
    if (maxWidth) return { width: `${maxWidth}px` };
    return {};
  };

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox={MAP[iid].viewBox}
      {...calcDimensions()}
    >
      <path d={MAP[iid].d} />
    </SVG>
  );
};

const SVG = styled.svg`
  height: ${props => props.height && props.height};
  width: ${props => props.width && props.width};
`;

Icon.propTypes = {
  iid: PropTypes.string,
  scale: PropTypes.number, // percentage dependent on width of parent container
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number
};

Icon.defaultProps = {
  iid: 'angellist'
};

export default Icon;
