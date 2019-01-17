import styled from 'styled-components';

export default styled.div`
  margin: 1rem 0 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .headline {
    font-size: 1rem;
    font-family: serif;
    letter-spacing: 0.05rem;
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

    a:first-child {
      margin-bottom: 0.5rem;
    }
  }

  .active-navlink {
    color: ${props => props.theme.colors.activeColor};
  }

  a {
    color: ${props => props.theme.colors.textColor};
    letter-spacing: 0.05rem;
    padding: 0.25rem 0.5rem;
    margin: 0 0.5rem;
    text-transform: uppercase;
  }

  a.pill {
    border: 2px solid ${props => props.theme.colors.textColor};
    border-radius: 5px;
  }
`;
