import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FadeIn } from 'components/reusable/ui/';
import { RowContainer } from 'components/reusable/Containers';

const LandingImage = ({ imgInfo, content }) => {
  return (
    <FadeIn>
      <Container jc="baseline">
        <Image {...imgInfo} />
        <ContentContainer className="p-h-1h">{content}</ContentContainer>
      </Container>
    </FadeIn>
  );
};

const Container = RowContainer.extend`
  /* max-width: 100%; */
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: ${props => props.height};
`;

Image.defaultProps = {
  height: '100%'
};

const ContentContainer = styled.div`
  position: absolute;
`;

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
