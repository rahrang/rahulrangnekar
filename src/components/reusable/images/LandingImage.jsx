import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FadeIn } from 'components/reusable/ui/';

const LandingImage = ({ imgInfo, content, contentClassNames }) => {
  return (
    <FadeIn>
      <div className="flex flex-row flex-wrap items-center relative justify-start">
        <Image className="w-full m-0" {...imgInfo} />
        <div className="px-6 absolute">{content}</div>
      </div>
    </FadeIn>
  );
};

const Image = styled.img`
  height: ${props => props.height};
`;

Image.defaultProps = {
  height: '100%'
};

LandingImage.propTypes = {
  imgInfo: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    height: PropTypes.string
  }),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  positions: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string
  })
};

export default LandingImage;
