import styled from 'styled-components';

export default styled.div`
  .mobile-only {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    @media (min-width: 1000px) {
      display: none;
    }
  }

  .navlink {
    font-size: 0.875rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    margin: 0.75rem 0;
    padding: 0.25rem 0.5rem;
    font-weight: 600;

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

  .mobile {
    .hamburger {
      width: 40px;
      border: none;
      background: transparent;
      color: ${props => props.theme.colors.blue};
      cursor: pointer;
      /* margin-top: 1rem; */

      transition: all 0.25s;

      &:hover {
        color: ${props => props.theme.colors.textColor};
      }
    }

    .mobile-navbar {
      .overlay {
      }

      .content {
        position: absolute;
        top: 0;
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

          &:hover,
          &:hover * {
            color: ${props => props.theme.colors.linkHoverColor};
          }
        }

        .navlink--active {
          color: ${props => props.theme.colors.activeColor};
        }
      }
    }
  }

  .navbar {
    @media (max-width: 1000px) {
      display: none;
    }

    margin: 1rem 0 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .navlink {
      color: ${props => props.theme.colors.textColor};

      &:hover,
      &:hover * {
        color: ${props => props.theme.colors.linkHoverColor};
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
