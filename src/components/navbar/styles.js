import styled from 'styled-components';

export default styled.div`
  .navbar {
    margin: 1rem 0 0;
    font-size: 0.875rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .navlink {
      color: ${props => props.theme.colors.textColor};
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      margin: 0 0.5rem;
      padding: 0.25rem 0.5rem;
      font-weight: 600;

      &:hover,
      &:hover * {
        color: ${props => props.theme.colors.linkHoverColor};
      }

      &.headline {
        text-align: center;
        margin: 0;
        padding: 0 0.5rem;

        * {
          margin: 0;
          padding: 0;
        }
      }
    }

    .navlink--active {
      color: ${props => props.theme.colors.activeColor};
    }

    .navbar-section {
      * {
        display: inline-block;
      }
    }
  }
`;
