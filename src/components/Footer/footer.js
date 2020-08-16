import React from 'react';

import styled from 'styled-components';
import { Container, Flex } from '../styles-in-js/shared';
import * as Styles from '../styles-in-js/theme';

import '../../styles/footer.scss';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Flex jc="space-between">
          <Text>
            Created with{' '}
            <span role="img" aria-labelledby="emoji">
              💛
            </span>{' '}
            using Gatsby & Figma
          </Text>
          <Text>- &copy; 2020 -</Text>
          <Text>
            Created with{' '}
            <span role="img" aria-labelledby="emoji">
              💛
            </span>{' '}
            by Shaurya Singhal
          </Text>
        </Flex>
      </Container>
    </FooterSection>
  );
};

export default Footer;

const Text = styled.div`
  font-size: ${Styles.text_small};
  color: ${Styles.white};
  padding: 20px;
`;

const FooterSection = styled.section`
  margin: 0;
  background: ${Styles.background};
`;
