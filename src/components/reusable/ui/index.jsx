import React from 'react';
import styled, { keyframes } from 'styled-components';

import fadeIn from 'react-animations/lib/fade-in';
import slideInDown from 'react-animations/lib/slide-in-down';

// Fade In
const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export const FadeIn = ({ children }) => <FadeInDiv>{children}</FadeInDiv>;

// Slide In Down
const slideInDownAnimation = keyframes`${slideInDown}`;
const SlideInDownDiv = styled.div`
  animation: 1s ${slideInDownAnimation};
`;

export const SlideInDown = ({ children }) => (
  <SlideInDownDiv>{children}</SlideInDownDiv>
);
