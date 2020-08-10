import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.repeat || 'repeat(2, 1fr)'};
  justify-content: ${(props) => props.jc || 'center'};
  align-content: ${(props) => props.ai || 'center'};
  gap: ${(props) => props.gap || 0};
  row-gap: ${(props) => props.rgap || 0};
  margin: ${(props) => props.margin || '20px auto'};
  width: 100%;
`;
