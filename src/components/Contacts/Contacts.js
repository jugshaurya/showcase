import React from 'react';

import Title from '../shared/Title';
import { Container, FloatingImage, Icon } from '../css-in-js/shared';
import {
  ContactsSection,
  ContactsArticle,
  ContactsLeft,
  GmailLink,
  SocialLinks,
  ContactsRight,
  ContactRightInternal,
} from './Contact.styles';

import { socialLinks } from '../../resources/socialLinks';

import Shaurya from '../../static/shaurya.png';
import ContactIcon from '../../static/icons/extra.svg';
import GmailIcon from '../../static/icons/gmail.svg';
import DotPattern3 from '../../static/patterns/dotpattern3.svg';
import DotPattern4 from '../../static/patterns/dotpattern4.svg';
import { motion } from 'framer-motion';
const Contacts = () => {
  return (
    <ContactsSection id="contacts">
      <Container
        data-aos="fade-in"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
        data-aos-delay="600"
      >
        <FloatingImage
          as={motion.img}
          animate={{ x: 0, y: [20, -20, 20] }}
          transition={{
            type: 'spring',
            damping: 10,
            stiffness: 100,
            duration: 2,
            repeat: Infinity,
          }}
          src={DotPattern3}
          alt={'dot Pattern'}
          t={['400px', '480px', '480px', '220px', '180px', '180px', '180px']}
          r={[0, 0, 0, 0, 0, 0, 0]}
          w={['auto', 'auto', '20%', '15%', '15%', '15%', '15%']}
          o={['0.5', '0.5', '0.5', '0.1', '0.1', '0.1', '0.1']}
        />
        <Title IconComp={ContactIcon} iconDesc={'Contact me'} />
        <ContactsArticle>
          <ContactsLeft>
            <FloatingImage
              as={motion.img}
              animate={{ x: 0, y: [20, -20, 20] }}
              transition={{
                type: 'spring',
                damping: 10,
                stiffness: 100,
                duration: 2,
                repeat: Infinity,
              }}
              src={DotPattern4}
              alt={'dot Pattern'}
              t={['-20px', '-20px', '20px', '-20px', '-20px', '-20px', '-20px']}
              l={[
                '-20px',
                '-20px',
                '-20px',
                '-20px',
                '-20px',
                '-20px',
                '-20px',
              ]}
              w={['auto', 'auto', '50%', '50%', '50%', '50%', '50%']}
              o={['0.5', '0.5', '0.5', '0.1', '0.1', '0.1', '0.1']}
            />
            <GmailLink as="a" href="mailto: shauryasinghal84@gmail.com">
              <Icon
                src={GmailIcon}
                alt="gmail icon"
                title="mail me @shauryasinghal84@gmail.com"
              />
            </GmailLink>
            <Icon
              src={Shaurya}
              alt="Shaurya"
              title="Shaurya Singhal"
              w={'200'}
              h={'200'}
              m="40px auto"
            />
            <SocialLinks>
              {socialLinks.map((link, index) => (
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Icon
                    src={link.icon}
                    alt={link.type}
                    title={link.type}
                    w="44"
                    h="44"
                    m="0"
                  />
                </a>
              ))}
            </SocialLinks>
          </ContactsLeft>
          <ContactsRight>
            <ContactRightInternal>
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
        </ContactsArticle>
      </Container>
    </ContactsSection>
  );
};

export default Contacts;
