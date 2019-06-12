import styled from 'styled-components';

export default styled.a`
  background-color: ${props =>
    props.alt ? props.theme.colors.textColor : props.theme.colors.bgColor};
  border: 2px solid
    ${props =>
      props.alt ? props.theme.colors.textColor : props.theme.colors.bgColor};
  border-radius: 0.25rem;
  color: ${props =>
    props.alt ? props.theme.colors.bgColor : props.theme.colors.textColor};
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.125rem;
  padding: 0.5rem 0.75rem;
  transition: 0.25s ease-in-out;

  &:hover {
    background-color: ${props =>
      props.alt ? props.theme.colors.bgColor : props.theme.colors.textColor};
    color: ${props =>
      props.alt ? props.theme.colors.textColor : props.theme.colors.bgColor};
  }

  &:active {
    box-shadow: none;
  }
`;
