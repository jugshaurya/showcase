import React from 'react';

import ContactIcon from '../../static/icons/extra.svg';
import GmailIcon from '../../static/icons/gmail.svg';
import LinkedInIcon from '../../static/icons/linkedin.svg';
import GithubIcon from '../../static/icons/github.svg';
import TwitterIcon from '../../static/icons/twitter.svg';
import DotPattern3 from '../../static/patterns/dotpattern3.svg';
import DotPattern4 from '../../static/patterns/dotpattern4.svg';

import Shaurya from '../../static/shaurya.png';

// import '../../styles/contacts.scss';

import Title from '../styles-in-js/Title';
import styled from 'styled-components';
import {
  Container,
  Flex,
  FloatingImage,
  Icon,
  Grid,
} from '../styles-in-js/shared';
import * as Styles from '../styles-in-js/theme';

const socialLink = [
  {
    link: 'https://github.com/jugshaurya',
    type: 'Github',
    icon: GithubIcon,
  },
  {
    link: 'https://twitter.com/jugshaurya',
    type: 'Twitter',
    icon: TwitterIcon,
  },
  {
    link: 'https://www.linkedin.com/in/jugshaurya/',
    type: 'Linkedin',
    icon: LinkedInIcon,
  },
];

const ContactsLeft = styled(Flex)`
  width: 541px;
  height: 556px;
  border-radius: 68px;
  background: ${Styles.black20};
  margin-left: 150px;
`;

const ContactLink = styled(Flex)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #1f1d1d;
`;

const SocialLinks = styled(Flex)`
  background-color: ${Styles.mapPurple};
  width: 246px;
  border-radius: 26px;
  height: auto;
  padding: 5px 20px 0px;
`;

const ContactsRight = styled(Flex)`
  background: ${Styles.black20};
  border: 12px double ${Styles.darkgreen};
  border-radius: 68px;
  width: 150%;
  height: 456px;
  margin-left: -275px;
  z-index: -1;
  margin-top: 40px;
`;

const ContactRightInternal = styled(Flex)`
  background: ${Styles.background};
  border-radius: 68px;
  z-index: -2;
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
`;

const Contacts = () => {
  return (
    <section id="contacts" style={{ position: 'relative', marginTop: '160px' }}>
      <Container style={{ position: 'relative' }} className="container">
        <FloatingImage
          src={DotPattern3}
          alt={'dot Pattern'}
          t={['400px', '480px', '300px', '220px', '180px', '180px', '180px']}
          r={[0, 0, 0, 0, 0, 0, 0]}
          w={['auto', '100%', '100%', '100%', '100%', '100%', '100%']}
        />
        <Title IconComp={ContactIcon} iconDesc={'Contact me'} />
        <Grid gtc="1fr 2fr">
          <ContactsLeft fd="column" style={{ position: 'relative' }}>
            <FloatingImage
              src={DotPattern4}
              alt={'dot Pattern'}
              t={[
                '-20px',
                '480px',
                '300px',
                '220px',
                '180px',
                '180px',
                '180px',
              ]}
              l={['-20px', 0, 0, 0, 0, 0, 0]}
              w={['auto', '100%', '100%', '100%', '100%', '100%', '100%']}
            />
            <ContactLink as="a" href="mailto: shauryasinghal84@gmail.com">
              <Icon
                src={GmailIcon}
                alt="gmail icon"
                title="mail me @shauryasinghal84@gmail.com"
              />
            </ContactLink>
            <Icon
              w={'200px'}
              h={'200px'}
              src={Shaurya}
              alt="Shaurya"
              title="Shaurya Singhal"
              m="50px auto"
            />
            <SocialLinks jc="space-evenly">
              {socialLink.map((link) => (
                <a href={link.link} rel="noopener noreferrer">
                  <Icon
                    src={link.icon}
                    alt={link.type}
                    title={link.type}
                    w="44px"
                    h="44px"
                    m="0"
                  />
                </a>
              ))}
            </SocialLinks>
          </ContactsLeft>
          <ContactsRight>
            <ContactRightInternal fd="column">
              Feel Free to reach out;
              <br /> whether you want my help or want to collaborate on some
              project. <br />
              <span>
                <span role="img" aria-labelledby="emoji">
                  🌱
                </span>{' '}
                Looking for Opportunities.{' '}
                <span role="img" aria-labelledby="emoji">
                  🌱
                </span>
              </span>
            </ContactRightInternal>
          </ContactsRight>
        </Grid>
      </Container>
    </section>
  );
};

export default Contacts;
