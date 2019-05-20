import styled from 'styled-components';

export default styled.div`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;

    &.wrapper--inverse {
      grid-template-columns: 2fr 1fr;
    }
  }
`;
