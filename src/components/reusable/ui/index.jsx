import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';
import slideInLeft from 'react-animations/lib/slide-in-left';

// Fade In
const fadeInAnimation = keyframes`${fadeIn}`;
export const FadeIn = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

// Slide In Left
const slideInLeftAnimation = keyframes`${slideInLeft}`;
export const SlideInLeft = styled.div`
  animation: 0.75s ${slideInLeftAnimation};
`;
