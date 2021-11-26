import React from 'react';

import styled from 'styled-components';
import { Container, Flex } from '../css-in-js/shared';
import * as Styles from '../css-in-js/theme';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterSection>
      <Container>
        <FooterArticle>
          <Text>
            Created with{' '}
            <span role="img" aria-labelledby="emoji">
              💛
            </span>{' '}
            using Gatsby & Figma
          </Text>
          <Text>- &copy; {currentYear} -</Text>
          <Text>
            Created with{' '}
            <span role="img" aria-labelledby="emoji">
              💛
            </span>{' '}
            by Shaurya Singhal
          </Text>
        </FooterArticle>
      </Container>
    </FooterSection>
  );
};

export default Footer;

const Text = styled.div`
  font-size: ${Styles.text_xxsmall};
  color: ${Styles.white};
  padding: 20px;
  @media ${Styles.device.ipad} {
    padding: 10px;
  }
  @media ${Styles.device.mobileL} {
    padding: 10px 0;
  }
  @media ${Styles.device.mobileM} {
    font-size: ${Styles.text_xxxsmall};
    padding: 5px 0;
  }
`;

const FooterSection = styled.section`
  margin: 0;
  background: ${Styles.background};
  @media ${Styles.device.mobile} {
    margin-top: 40px;
  }
`;

const FooterArticle = styled(Flex)`
  justify-content: space-between;

  @media ${Styles.device.mobileL} {
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
  }
`;
