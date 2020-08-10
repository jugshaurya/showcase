import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd || 'row'};
  justify-content: ${(props) => props.jc || 'center'};
  align-items: ${(props) => props.ai || 'center'};
  flex-wrap: ${(props) => props.fw || 'no-wrap'};
  gap: ${(props) => props.gap || 0};
`;

export const SectionTitle = styled(Flex)`
  margin-bottom: 80px;
`;
