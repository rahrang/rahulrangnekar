import styled from 'styled-components';

export default styled.div`
  /* background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…csNTMwLjQ2ODAwNyA2OTMuNDE5MzI0LDUyOS44Mjc1NjcgWiIvPgogIDwvZz4KPC9zdmc+Cg==)
      right center / contain no-repeat,
    url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…U1LDIwLjg3NTY4MzIgMTIuNzQ2ODUyOCwyMC44NzU4MTcxIFoiLz4KICA8L2c+Cjwvc3ZnPgo=)
      left center,
    linear-gradient(-213deg, rgb(94, 49, 220) 0%, rgb(49, 85, 220) 100%)
      rgb(49, 85, 220); */

  .navbar {
    margin: 1rem 0 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .headline {
      font-size: 0.875rem;
      font-family: sans-serif;
      /* letter-spacing: 0.05rem; */
      text-align: center;
      margin: 0;
      padding: 0 0.5rem;

      * {
        margin: 0;
        padding: 0;
      }
    }

    .navbar-section {
      * {
        display: inline-block;
      }
    }

    .active-navlink {
      color: ${props => props.theme.colors.activeColor};

      &::before {
        content: '<';
      }

      &::after {
        content: '/>';
      }
    }

    a {
      color: ${props => props.theme.colors.textColor};
      letter-spacing: 0.05rem;
      /* font-size: 0.875rem; */
      padding: 0.25rem 0.5rem;
      margin: 0 0.5rem;
      text-transform: uppercase;
    }

    a.pill {
      border: 2px solid ${props => props.theme.colors.textColor};
      border-radius: ${props => props.theme.br};
    }
  }
`;
