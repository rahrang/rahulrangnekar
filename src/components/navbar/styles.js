import styled from 'styled-components';

export default styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .headline {
    font-size: 40px;
    font-family: serif;
    margin: 0.25rem 0 0;
  }

  .navbar-section {
    * {
      display: inline-block;
    }
  }

  .active-navlink {
    color: ${props => props.theme.colors.activeColor};
  }

  a {
    color: ${props => props.theme.colors.textColor};
    text-transform: uppercase;
    padding: 5px 10px;
    margin: 0 10px;
  }

  a.pill {
    border: 2px solid ${props => props.theme.colors.textColor};
    border-radius: 5px;
  }
`;
