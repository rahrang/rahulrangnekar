import React from 'react';
import styled, { keyframes } from 'styled-components';

import fadeIn from 'react-animations/lib/fade-in';
import slideInLeft from 'react-animations/lib/slide-in-left';

// Fade In
const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export const FadeIn = ({ children }) => <FadeInDiv>{children}</FadeInDiv>;

// Slide In Left
const slideInLeftAnimation = keyframes`${slideInLeft}`;
const SlideInLeftDiv = styled.div`
  animation: 0.75s ${slideInLeftAnimation};
`;

export const SlideInLeft = ({ children }) => (
  <SlideInLeftDiv>{children}</SlideInLeftDiv>
);
