import styled from 'styled-components';
import * as Styles from '../styles-in-js/theme';
import {
  Container,
  Icon,
  FloatingImage,
  Flex,
  Grid,
} from '../styles-in-js/shared';

export const GithubActivitySection = styled.div`
  border-radius: 48px;
  border: 1px solid ${Styles.gray};
  align-self: flex-end;
  width: 70%;
  padding: 30px;

  @media ${Styles.device.laptopL} {
    width: 80%;
  }

  @media ${Styles.device.laptop} {
    width: 85%;
  }

  @media ${Styles.device.ipad} {
    width: 95%;
  }

  @media ${Styles.device.mobileL} {
    width: 100%;
  }

  @media ${Styles.device.mobileM} {
  }

  @media ${Styles.device.mobileS} {
  }
`;

export const ScrollableSvg = styled.div`
  width: 80%;
  margin: 0 auto;
  direction: rtl;
  overflow-x: scroll;
  svg {
    background: ${Styles.black};
    font-size: 0.7em;
    text {
      fill: ${Styles.gray};
      font-size: 0.8em;
    }
  }

  @media ${Styles.device.mobileL} {
    width: 100%;
  }
`;

export const GithubActivities = styled(Flex)`
  @media ${Styles.device.mobileL} {
    flex-direction: column;
  }
`;

export const GithubActivity = styled.div`
  border-right: 1px solid ${Styles.gray};
  width: 50%;
  margin: 20px;
  @media ${Styles.device.mobileL} {
    width: 100%;
    border: none;
    border-top: 1px solid ${Styles.gray};
  }
`;

export const ActivityHeading = styled.div`
  margin: 10px 0;
  font-size: ${Styles.text_small};
  color: ${Styles.green};
  background: ${Styles.black};
`;

export const Activity = styled(Flex)`
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const GithubOrganization = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px dashed ${Styles.gray};
  font-size: ${Styles.text_xsmall};
  background: ${Styles.black};
`;

export const GithubRepo = styled.a`
  text-decoration: underline;
  font-size: ${Styles.text_xxsmall};
  color: ${Styles.blue};
  display: inline-block;
`;

export const GithubGraph = styled.div`
  width: 100%;
  margin: 0 auto;
  svg {
    margin-left: 40px;
    font-size: 0.8em;
    fill: ${Styles.gray};
    overflow: visible;
    text {
      font-size: 0.7em;
    }
    @media ${Styles.device.laptopL} {
      margin-left: 0;
    }
  }
`;
