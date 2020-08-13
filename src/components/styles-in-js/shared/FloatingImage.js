import styled from 'styled-components';
import * as Styles from '../theme';

export const FloatingImage = styled.img`
  position: absolute;
  top: ${(p) => p.t && p.t[0]};
  right: ${(p) => p.r && p.r[0]};
  bottom: ${(p) => p.b && p.b[0]};
  left: ${(p) => p.l && p.l[0]};
  width: ${(p) => (p.w && p.w[0]) || 'auto'};
  height: ${(p) => (p.h && p.h[0]) || 'auto'};
  z-index: ${(p) => p.zi || -1};

  @media ${Styles.device.laptopL} {
    top: ${(p) => p.t && p.t[1]};
    right: ${(p) => p.r && p.r[1]};
    bottom: ${(p) => p.b && p.b[1]};
    left: ${(p) => p.l && p.l[1]};
    width: ${(p) => (p.w && p.w[1]) || 'auto'};
    height: ${(p) => (p.h && p.h[1]) || 'auto'};
  }

  @media ${Styles.device.laptop} {
    top: ${(p) => p.t && p.t[2]};
    right: ${(p) => p.r && p.r[2]};
    bottom: ${(p) => p.b && p.b[2]};
    left: ${(p) => p.l && p.l[2]};
    width: ${(p) => (p.w && p.w[2]) || 'auto'};
    height: ${(p) => (p.h && p.h[2]) || 'auto'};
  }

  @media ${Styles.device.ipad} {
    top: ${(p) => p.t && p.t[3]};
    right: ${(p) => p.r && p.r[3]};
    bottom: ${(p) => p.b && p.b[3]};
    left: ${(p) => p.l && p.l[3]};
    width: ${(p) => (p.w && p.w[3]) || 'auto'};
    height: ${(p) => (p.h && p.h[3]) || 'auto'};
  }

  @media ${Styles.device.mobileL} {
    top: ${(p) => p.t && p.t[4]};
    right: ${(p) => p.r && p.r[4]};
    bottom: ${(p) => p.b && p.b[4]};
    left: ${(p) => p.l && p.l[4]};
    width: ${(p) => (p.w && p.w[4]) || 'auto'};
    height: ${(p) => (p.h && p.h[4]) || 'auto'};
  }

  @media ${Styles.device.mobileM} {
    top: ${(p) => p.t && p.t[5]};
    right: ${(p) => p.r && p.r[5]};
    bottom: ${(p) => p.b && p.b[5]};
    left: ${(p) => p.l && p.l[5]};
    width: ${(p) => (p.w && p.w[5]) || 'auto'};
    height: ${(p) => (p.h && p.h[5]) || 'auto'};
  }

  @media ${Styles.device.mobileS} {
    top: ${(p) => p.t && p.t[6]};
    right: ${(p) => p.r && p.r[6]};
    bottom: ${(p) => p.b && p.b[6]};
    left: ${(p) => p.l && p.l[6]};
    width: ${(p) => (p.w && p.w[6]) || 'auto'};
    height: ${(p) => (p.h && p.h[6]) || 'auto'};
  }
`;
