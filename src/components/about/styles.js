import styled from 'styled-components';

export default styled.div`
  margin-bottom: 4rem;

  p {
    font-size: 1.25rem;
    letter-spacing: 0.025rem;
    line-height: 2rem;

    a {
      text-transform: uppercase;
      font-size: 0.875rem;
      font-weight: 600;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;

    p {
      margin: 0;
    }

    margin-bottom: 2rem;
  }

  .actions {
    p {
      margin-right: 1rem;
    }
  }
`;
