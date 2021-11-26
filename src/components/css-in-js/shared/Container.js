import styled from 'styled-components';
import * as Styles from '../theme';

export const Container = styled.div`
  position: relative;
  width: 70vw;
  height: ${(props) => props.height || 'auto'};
  margin: 0 auto;
  @media ${Styles.device.laptopL} {
    width: 80vw;
  }
  @media ${Styles.device.laptop} {
    width: 85vw;
  }
  @media ${Styles.device.ipad} {
    width: 90vw;
  }
  @media ${Styles.device.mobileL} {
    width: 90vw;
  }
  @media ${Styles.device.mobileM} {
    width: 85vw;
  }
  @media ${Styles.device.mobileS} {
    width: 85vw;
  }
`;
