import styled from 'styled-components';
import * as Styles from '../theme';

export const Container = styled.div`
  /* border: 3px solid gray; */
  position: relative;
  width: 70vw;
  height: ${(props) => props.height || 'auto'};
  margin: 0 auto;
  @media ${Styles.device.laptop} {
    width: 80vw;
  }
  @media ${Styles.device.laptopL} {
    width: 90vw;
  }
  @media ${Styles.device.ipad} {
  }
  @media ${Styles.device.mobileL} {
  }
  @media ${Styles.device.mobileM} {
  }
  @media ${Styles.device.mobileS} {
  }
`;
