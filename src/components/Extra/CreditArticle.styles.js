import styled from 'styled-components';
import * as Styles from '../styles-in-js/theme';

export const CreditTitle = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  color: ${Styles.white};
  background: ${Styles.background};
  font-family: ${Styles.font_gloriahallelujah};
  font-weight: bold;
`;

export const CreditList = styled.div`
  list-style-type: none;
  padding: 20px;
  margin: 20px;
  color: ${Styles.gray};
`;

export const CreditListItem = styled.div`
  line-height: 1.2em;
  &::before {
    border: 10px double ${Styles.twitterBlue};
    content: '';
    display: inline-block;
    height: 32px;
    width: 32px;
    margin-right: 15px;
    transform: rotateZ(-20deg) rotateX(-10deg);
  }
  @media ${Styles.device.ipad} {
    line-height: 1em;
    &::before {
      height: 24px;
      width: 24px;
      margin-top: 5px;
      border: 8px double ${Styles.twitterBlue};
    }
  }
`;

export const CreditListItemLink = styled.a`
  text-decoration: none;
  padding-bottom: 10px;
  font-size: ${Styles.text_small};
  background: ${Styles.g_blueGreen};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${Styles.device.ipad} {
    font-size: ${Styles.text_xsmall};
  }
`;

export const CreditListItemText = styled.sub`
  font-size: ${Styles.text_xxxsmall};
  font-family: ${Styles.font_normal};
  letter-spacing: -1px;
`;
