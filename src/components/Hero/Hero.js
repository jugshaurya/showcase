import React, { useEffect } from 'react';
import { Icon, Container, FloatingImage } from '../css-in-js/shared';
import { motion } from 'framer-motion';
import TypeWriterEffect from 'react-typewriter-effect';

import {
  Showcase,
  ShowcaseTop,
  ShowcaseText,
  ShowcaseBar,
  ShowcaseMainText,
  ShowcaseBottom,
  ShowcaseLogos,
} from './Hero.styles';

import BookPattern from './BookPattern';
import Snow from './Snow';

import NavbarBackground from '../../static/patterns/bg-navbar.svg';
import BoxPattern from '../../static/patterns/box-pattern.svg';
import JSIcon from '../../static/icons/js.svg';
import NodeIcon from '../../static/icons/node.svg';
import ReactIcon from '../../static/icons/react.svg';
import ReduxIcon from '../../static/icons/redux.svg';
import CIcon from '../../static/icons/c.svg';
import GraphqlIcon from '../../static/icons/graphql.svg';
import GatsbyIcon from '../../static/icons/gatsby.svg';
import FigmaIcon from '../../static/icons/figma.svg';
import Bag from '../../static/icons/bag.svg';

const Hero = () => {
  return (
    <section id="hero" style={{ position: 'relative' }}>
      <Snow />
      <FloatingImage
        src={NavbarBackground}
        alt={'Navbar BG'}
        t={[
          '-250px',
          '-250px',
          '-150px',
          '-150px',
          '-120px',
          '-120px',
          '-120px',
        ]}
        r={[0, 0, 0, 0, 0, 0, 0]}
        w={['80vw', '80vw', '80vw', '100%', '100%', '100vw', '90vw']}
      />

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
        src={BoxPattern}
        alt={'Box Pattern'}
        t={['350px', '400px', '400px', '220px', '180px', '180px', '180px']}
        r={[0, 0, 0, 0, 0, 0, 0]}
        w={['20vw', '20vw', '20vw', '20vw', '20vw', '20vw', '20vw']}
        o={['0.4', '0.4', '0.4', '0.4', '0', '0', '0']}
      />

      <BookPattern />

      <Container height="100vh">
        <Showcase>
          <ShowcaseTop>
            <FloatingImage
              as={motion.img}
              initial={{ rotate: 270 }}
              animate={{ y: 0, x: [0, 100, 0] }}
              transition={{
                type: 'spring',
                damping: 10,
                stiffness: 100,
                duration: 2,
                repeat: Infinity,
              }}
              id="bag"
              style={{ transform: 'rotate(-90deg)' }}
              src={Bag}
              alt={'Bag'}
              t={['-90px', '-90px', '-90px', '-90px', '20px', '20px', '-60px']}
              l={['50px', '50px', '50px', '50px', '50px', '50px', '50px']}
              w={['auto', 'auto', 'auto', 'auto', '100px', '100px', '100px']}
            />
            <ShowcaseText>Hi, I'm</ShowcaseText>
            <ShowcaseBar span="2" />
            <ShowcaseMainText
              span="3"
              as={motion.div}
              whileHover={{ scale: 1.2 }}
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              Shaurya Singhal
            </ShowcaseMainText>
            <ShowcaseBar span="2" />
            <ShowcaseText>
              <TypeWriterEffect
                textStyle={{
                  color: 'inherit',
                  fontSize: 'inherit',
                }}
                cursorColor="white"
                multiText={[
                  'Software Engineer',
                  'Software Developer',
                  'OpenSource',
                  'Qualified Gate',
                ]}
                startDelay={2000}
                multiTextDelay={1000}
                typeSpeed={30}
                multiTextLoop={true}
              />
            </ShowcaseText>
          </ShowcaseTop>

          <ShowcaseBottom>
            <ShowcaseLogos span="3" as={motion.div} whileHover={{ scale: 1.1 }}>
              <Icon
                w="48"
                h="48"
                src={JSIcon}
                alt="JS Icon"
                title={`Javascript\n(Intermediate)`}
              />
              <Icon
                className="node"
                w="60"
                h="60"
                src={NodeIcon}
                alt="Node Icon"
                title={`Node\n(Intermediate)`}
              />
              <Icon
                w="44"
                h="44"
                src={ReactIcon}
                alt="React Icon"
                title={`React\n(Intermediate)`}
              />
              <Icon
                w="48"
                h="48"
                src={CIcon}
                alt="C++ Icon"
                title={`C++\n(Intermediate)`}
              />
              <Icon
                w="44"
                h="44"
                src={GraphqlIcon}
                alt="Graphql Icon"
                title={`Graphql\n(Intermediate)`}
              />
              <Icon
                w="44"
                h="44"
                src={GatsbyIcon}
                alt="Gatsby Icon"
                title={`Gatsby\n(Intermediate)`}
              />
              <Icon
                w="44"
                h="44"
                src={FigmaIcon}
                alt="Figma Icon"
                title={`Figma\n(Beginner)`}
              />
            </ShowcaseLogos>
            <ShowcaseBar span="3" />
          </ShowcaseBottom>
        </Showcase>
      </Container>
    </section>
  );
};

export default Hero;
