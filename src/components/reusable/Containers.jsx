import styled from 'styled-components';

const RowContainer = styled.div`
  background-color: ${props => props.bgColor || 'rgba(0, 0, 0, 0)'};
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'center'};
`;

const ColumnContainer = RowContainer.extend`
  flex-direction: column;
`;

export { RowContainer, ColumnContainer };
