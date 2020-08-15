import React, { useEffect } from 'react';

import styled from 'styled-components';
import {
  Container,
  FloatingImage,
  Icon,
  Grid,
  Flex,
} from '../styles-in-js/shared';
import * as Styles from '../styles-in-js/theme';

import BookPattern from './BookPattern';
import Snow from './Snow';

import NavbarBackground from '../../static/patterns/bg-navbar.svg';
import BoxPattern from '../../static/patterns/box-pattern.svg';
import JSIcon from '../../static/icons/js.svg';
import NodeIcon from '../../static/icons/node.svg';
import ReactIcon from '../../static/icons/react.svg';
import ReduxIcon from '../../static/icons/redux.svg';
import GraphqlIcon from '../../static/icons/graphql.svg';
import GatsbyIcon from '../../static/icons/gatsby.svg';
import FigmaIcon from '../../static/icons/figma.svg';
import Bag from '../../static/icons/bag.svg';

// import '../../styles/hero.scss';

const socialLink = {
  githubLink: 'https://github.com/jugshaurya',
  twitterLink: 'https://twitter.com/jugshaurya',
  linkedinLink: 'https://www.linkedin.com/in/jugshaurya/',
};

const Hero = () => {
  // Bag Move Animation on scroll > 200
  useEffect(() => {
    const bag = document.getElementById('bag');
    const scrollBag = (e) => {
      const Yoffset = Math.round(window.scrollY / 2);
      if (Yoffset > 200) return;
      bag.style.transform = `translateX(${Yoffset}px) rotate(270deg)`;
      bag.style.transition = `0.01s ease-in-out`;
    };

    window.addEventListener('scroll', scrollBag);
    return () => {
      window.removeEventListener('scroll', scrollBag);
    };
  }, []);

  return (
    <section id="hero" style={{ position: 'relative', width: '100vw' }}>
      <Snow />
      <FloatingImage
        src={NavbarBackground}
        alt={'Navbar BG'}
        t={[
          '-250px',
          '-480px',
          '-300px',
          '-220px',
          '-180px',
          '-180px',
          '-180px',
        ]}
        r={[0, 0, 0, 0, 0, 0, 0]}
        w={['80vw', '100%', '100%', '100%', '100%', '100%', '100%']}
      />
      <FloatingImage
        src={BoxPattern}
        alt={'Box Pattern'}
        t={[
          '350px',
          '-480px',
          '-300px',
          '-220px',
          '-180px',
          '-180px',
          '-180px',
        ]}
        r={[0, 0, 0, 0, 0, 0, 0]}
        w={['20vw', '100%', '100%', '100%', '100%', '100%', '100%']}
      />
      <BookPattern {...socialLink} />
      <Container height="100vh">
        <Showcase
          fd="column"
          jc="center"
          ai="flex-end"
          style={{ marginTop: '100px' }}
        >
          <ShowcaseTop gtc="80px 300px 210px" ai="flex-end" margin="0">
            <FloatingImage
              id="bag"
              style={{ transform: 'rotate(-90deg)' }}
              src={Bag}
              alt={'Bag'}
              t={[
                '-90px',
                '-480px',
                '-300px',
                '-220px',
                '-180px',
                '-180px',
                '-180px',
              ]}
              l={['50px', 0, 0, 0, 0, 0, 0]}
            />
            <ShowcaseText>Hi, I'm</ShowcaseText>
            <ShowcaseBar w="80%" style={{ gridColumn: 'span 2' }} />
            <ShowcaseMainText style={{ gridColumn: 'span 3' }}>
              Shaurya Singhal
            </ShowcaseMainText>
            <ShowcaseBar w="70%" style={{ gridColumn: 'span 2' }} />
            <ShowcaseText ta="left" margin="0 0 0 -95px">
              Software Developer
            </ShowcaseText>
          </ShowcaseTop>
          <ShowcaseBottom>
            <ShowcaseLogos gtc="repeat(7, 1fr)" margin="30px 0 5px 0">
              <Icon
                w="44px"
                h="44px"
                src={JSIcon}
                alt="JS Icon"
                title={`Javascript\n(Intermediate)`}
              />
              <Icon
                w="60px"
                h="60px"
                src={NodeIcon}
                alt="Node Icon"
                title={`Node\n(Intermediate)`}
                m="0 0 0 -10px"
                style={{ alignSelf: 'flex-end' }}
              />
              <Icon
                w="44px"
                h="44px"
                src={ReactIcon}
                alt="React Icon"
                title="{`React\n(Intermediate)`}"
              />
              <Icon
                w="44px"
                h="44px"
                src={ReduxIcon}
                alt="Redux Icon"
                title={`Redux\n(Intermediate)`}
              />
              <Icon
                w="44px"
                h="44px"
                src={GraphqlIcon}
                alt="Graphql Icon"
                title={`Graphql\n(Intermediate)`}
              />
              <Icon
                w="44px"
                h="44px"
                src={GatsbyIcon}
                alt="Gatsby Icon"
                title={`Gatsby\n(Intermediate)`}
              />
              <Icon
                w="44px"
                h="44px"
                src={FigmaIcon}
                alt="Figma Icon"
                title={`Figma\n(Beginner)`}
              />
            </ShowcaseLogos>
            <ShowcaseBar w="84%" />
          </ShowcaseBottom>
        </Showcase>
      </Container>
    </section>
  );
};

export default Hero;

const Showcase = styled(Flex)`
  height: 100%;
`;

const ShowcaseLogos = styled(Grid)`
  width: 90%;
`;

const ShowcaseMainText = styled.div`
  font-size: ${Styles.text_xxlarge};
  line-height: ${Styles.text_xlarge};
  background: ${Styles.g_blackOrange};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ShowcaseBar = styled.div`
  height: 6px;
  border-radius: 7px;
  background: ${Styles.g_blueGreen};
  align-self: center;
  width: ${(props) => props.w};
`;

const ShowcaseText = styled.div`
  font-size: ${Styles.text_small};
  color: ${Styles.gray};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.ta};
`;

const ShowcaseTop = styled(Grid)`
  position: relative;
  width: 590px;
`;

const ShowcaseBottom = styled.div`
  width: 590px;
`;
