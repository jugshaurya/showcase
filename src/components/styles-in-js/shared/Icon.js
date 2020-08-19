import styled from 'styled-components';
import * as Styles from '../theme';
export const Icon = styled.img`
  width: ${(p) => p.w + 'px' || 'auto'};
  height: ${(p) => p.h + 'px' || 'auto'};
  margin: ${(p) => p.m || 0};
  &:hover {
    cursor: hand;
    transform: scale(1.2);
  }
  @media ${Styles.device.mobileL} {
    width: ${(p) => p.w * 0.6 + 'px' || 'auto'};
    height: ${(p) => p.h * 0.6 + 'px' || 'auto'};
  }

  &.node {
    margin: 10px 0 0 -10px;

    @media ${Styles.device.laptop} {
      margin: 5px 0 0 -5px;
      padding-top: 15px;
    }
    @media ${Styles.device.mobileL} {
      margin: 5px 0 0 -5px;
      padding-top: 15px;
    }
  }
`;
