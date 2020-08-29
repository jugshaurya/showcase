import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import { Flex } from '../css-in-js/shared';

export const PRLists = styled(Flex)`
  gap: 40px;
  min-height: 680px;

  @media ${Styles.device.mobileL} {
    flex-direction: column;
    min-height: 1300px;
  }
`;

export const PRList = styled(Flex)`
  position: relative;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  border-radius: 45px;

  @media ${Styles.device.mobileL} {
    width: 100%;
  }
`;
export const H3 = styled.h3``;

export const PRItem = styled(Flex)`
  width: 100%;
  border-radius: 15px;
  padding: 5px 10px;
  border-left: 10px solid ${Styles.mapPurple};
  border-bottom: 2px solid ${Styles.gray};
  &:hover {
    background: ${Styles.mapPurple};
    .hover-white {
      color: ${Styles.white};
      font-weight: bold;
    }
  }

  @media ${Styles.device.mobileL} {
    padding: 2px 10px;
    border-right: 10px solid ${Styles.mapPurple};
    border-bottom: 1px solid ${Styles.gray};
    border-top: 1px solid ${Styles.gray};
  }
`;

export const Logo = styled(Flex)`
  overflow: hidden;
  background: ${Styles.black};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  text-align: center;
  border: 1px dashed ${Styles.gray};
  @media ${Styles.device.mobileL} {
    width: 32px;
    height: 32px;
  }
`;

export const PRDesc = styled.a`
  width: 85%;
  cursor: pointer;
  text-decoration: none;
  color: ${Styles.gray};
  font-size: ${Styles.text_xsmall};
  letter-spacing: 0.02em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px;
  padding-left: 20px;
  span {
    img {
      width: 22px !important;
      height: 22px !important;
    }
  }
`;
