import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.colors.darker};
  color: ${props => props.theme.colors.lighter};
  padding-top: 2rem;
  padding-bottom: 2rem;

  .footer {
    border-top: 0.5px solid ${props => props.theme.colors.light};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

    .contact-form {
      width: 100%;
      background-color: ${props => props.theme.colors.dark};
      padding: 1rem;
      padding-top: 0;
      border-radius: ${props => props.theme.br};

      h3 {
        color: ${props => props.theme.colors.lighter};
      }

      form.contact {
        label {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        span.label {
          font-size: 0.875rem;
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }

        .row-1 {
          display: flex;
          flex-direction: row;
          align-items: baseline;

          margin-bottom: 1.5rem;

          .input-wrapper {
            flex: 1;

            &:first-of-type {
              padding-right: 1.5rem;
            }

            input {
              width: 100%;
            }
          }
        }

        textarea {
          width: 100%;
          min-height: 125px;
          resize: none;
        }

        input,
        textarea {
          background-color: ${props => props.theme.colors.lighter};
          padding: 0.5rem;
        }

        input,
        textarea,
        button {
          border: none;
          border-radius: ${props => props.theme.br};
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
          font-size: 1rem;
        }

        .button-wrapper {
          text-align: right;
        }

        button[type='submit'] {
          background-color: ${props => props.theme.colors.gold};
          color: ${props => props.theme.colors.dark};
          cursor: pointer;
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          /* width: 100%; */

          transition: 0.25s ease-in-out;

          &:hover {
            background-color: ${props => props.theme.colors.darker};
            color: ${props => props.theme.colors.light};
          }
        }
      }
    }
  }
`;
