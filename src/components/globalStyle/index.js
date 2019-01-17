import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ::selection {
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.linkHoverColor};
  }

  ::-moz-selection {
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.linkHoverColor};
  }

  body {
    background-color: ${props => props.theme.colors.bgColor};
    font-family: 'system-ui';
    margin: 0;
    padding: 0;

    /* TODO: add font, flex styles */

    h1, h2, h3, h4 {
      color: ${props => props.theme.colors.headingColor};
    }

    p {
      color: ${props => props.theme.colors.textColor};
    }

    a {
      color: ${props => props.theme.colors.linkColor};
      text-decoration: none;

      &:hover {
        color: ${props => props.theme.colors.linkHoverColor};
      }
    }
  }
`;
