import styled from 'styled-components';

export default styled.a`
  background-color: ${props => props.theme.colors.textColor};
  border: 2px solid ${props => props.theme.colors.textColor};
  border-radius: 0.25rem;
  color: ${props => props.theme.colors.bgColor};
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.125rem;
  padding: 0.5rem 0.75rem;
  transition: 0.25s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.bgColor};
    color: ${props => props.theme.colors.textColor};
  }

  &:active {
    box-shadow: none;
  }
`;
