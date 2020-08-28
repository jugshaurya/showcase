import styled from 'styled-components';
import * as Styles from '../styles-in-js/theme';
import { Flex } from '../styles-in-js/shared';

export const ContactsSection = styled.section`
  position: relative;
  margin-top: 160px;
  @media ${Styles.device.ipad} {
    margin-bottom: 100px;
  }
`;

export const ContactsArticle = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;

  grid-template-columns: 1fr 2fr;

  @media ${Styles.device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

export const ContactsLeft = styled(Flex)`
  position: relative;
  flex-direction: column;
  width: 541px;
  height: 556px;
  border-radius: 68px;
  background: ${Styles.black20};
  margin-left: 150px;

  @media ${Styles.device.laptop} {
    width: 441px;
    height: 456px;
    margin-left: 50px;
  }
  @media ${Styles.device.ipad} {
    width: 341px;
    height: 356px;
  }
  @media ${Styles.device.mobileL} {
    width: 100%;
    margin: 0;
    height: 35vh;
    border-radius: 10px;
    border: 4px double ${Styles.darkgreen};
  }

  @media ${Styles.device.mobileM} {
    height: 35vh;
  }
`;

export const GmailLink = styled(Flex)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #1f1d1d;

  @media ${Styles.device.mobileL} {
    margin-top: 0px;
  }
  @media ${Styles.device.mobileM} {
    margin-top: 0px;
  }
  @media ${Styles.device.mobileS} {
    margin-top: -10px;
  }
`;

export const SocialLinks = styled(Flex)`
  justify-content: space-evenly;
  background-color: ${Styles.mapPurple};
  width: 246px;
  border-radius: 26px;
  height: auto;
  padding: 5px 20px 0px;
  @media ${Styles.device.mobileL} {
    padding: 5px 0;
    margin-top: -20px;
    a {
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

export const ContactsRight = styled(Flex)`
  background: ${Styles.black20};
  border: 12px double ${Styles.darkgreen};
  border-radius: 68px;
  width: 150%;
  height: 456px;
  margin-left: -275px;
  margin-top: 40px;

  @media ${Styles.device.laptop} {
    height: 406px;
    margin-left: -255px;
  }
  @media ${Styles.device.ipad} {
    height: 306px;
    margin-left: -155px;
  }
  @media ${Styles.device.mobileL} {
    width: 100%;
    margin: 0;
    height: 206px;
    border: 4px double ${Styles.mapPurple};
    border-radius: 10px;
  }
  @media ${Styles.device.mobileM} {
    height: 256px;
  }
  @media ${Styles.device.mobileS} {
    height: 256px;
  }
`;

export const ContactRightInternal = styled(Flex)`
  flex-direction: column;
  background: ${Styles.background};
  border-radius: 68px;
  width: 80%;
  text-align: center;
  height: 256px;
  padding: 100px;
  color: ${Styles.gray};
  margin-left: -40px;
  font-size: ${Styles.text_xsmall};
  span {
    margin-top: 10px;
    color: ${Styles.blue};
    &::selection {
      background-color: ${Styles.black};
      color: ${Styles.gray};
    }
  }

  @media ${Styles.device.laptop} {
    margin-left: 5px;
  }
  @media ${Styles.device.ipad} {
    height: 156px;
    width: 100%;
  }
  @media ${Styles.device.mobileL} {
    background: none;
    width: 100%;
    margin: 0;
    padding-top: 120px;
  }
  @media ${Styles.device.mobileM} {
    width: 100%;
    padding: 30px;
    height: 100%;
    padding-top: 70px;
    margin: 0;
  }
`;
