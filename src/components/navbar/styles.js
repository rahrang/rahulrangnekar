import styled from 'styled-components';

export default styled.div`
  .mobile-only {
    display: block;
    @media (min-width: ${props => props.theme.contentWidth}) {
      display: none;
    }
  }

  .mobile {
    .hamburger {
      width: 40px;
      border: none;
      background: transparent;
      color: ${props => props.theme.colors.blue};
      cursor: pointer;
      margin-top: 1rem;

      transition: all 0.25s;

      &:hover {
        color: ${props => props.theme.colors.textColor};
      }
    }

    .mobile-navbar {
      position: absolute;
      top: 20px;
      left: 80px;

      z-index: 5;

      background-color: ${props => props.theme.colors.textColor};
      border-radius: ${props => props.theme.br};
      box-shadow: ${props => props.theme.bxs};
      display: flex;
      flex-direction: column;

      width: 250px;
      padding: 0 1rem 1rem;

      .navlink {
        color: ${props => props.theme.colors.bgColor};
        letter-spacing: 0.05rem;
        text-transform: uppercase;
        margin: 0.75rem 0;
        padding: 0.25rem 0.5rem;
        font-weight: 600;

        &:hover,
        &:hover * {
          color: ${props => props.theme.colors.linkHoverColor};
        }
      }
    }
  }

  .navbar {
    @media (max-width: ${props => props.theme.contentWidth}) {
      display: none;
    }

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

  .mobile {
    .hamburger {
      color: ;
    }
  }
`;
