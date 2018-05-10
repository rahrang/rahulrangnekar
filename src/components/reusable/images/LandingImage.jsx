import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FadeIn } from 'components/reusable/ui/';

const LandingImage = ({ imgInfo, content, position }) => {
  return (
    <FadeIn>
      <Container>
        <Image {...imgInfo} />
        <ContentContainer {...position}>{content}</ContentContainer>
      </Container>
    </FadeIn>
  );
};

const Container = styled.div`
  max-width: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: ${props => props.height || '100%'};
`;

const ContentContainer = styled.div`
  position: absolute;
  top: ${props => props.top || '50%'};
  left: ${props => props.left || '50%'};
  transform: ${props =>
    `translate(${props.left ? -1 * props.left : '-50%'}, ${
      props.top ? -1 * props.top : '-50%'
    })`};
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
