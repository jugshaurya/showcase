import React from 'react';

import Languages from './Languages';

import styled from 'styled-components';
import {
  Container,
  Flex,
  FloatingImage,
  rotate,
  Icon,
  Grid,
} from '../styles-in-js/shared';
import * as Styles from '../styles-in-js/theme';

import ShauryaBackground from '../../static/patterns/bg-shaurya.svg';
import Shaurya from '../../static/shaurya.png';
import MapSVG from '../../static/map.svg';
import GraphqlIcon from '../../static/icons/graphql.svg';
import GatsbyIcon from '../../static/icons/gatsby.svg';
import FigmaIcon from '../../static/icons/figma.svg';

import '../../styles/about.scss';

const About = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <Languages />
      <AboutMe
        style={{
          margin: '300px auto 0 ',
          textAlign: 'center',
        }}
      >
        <FloatingImage
          src={ShauryaBackground}
          alt={'Shaurya BG'}
          style={{ transform: 'rotate(4deg)', opacity: '0.7' }}
          t={['10%', '1%', '10%', '10%', '10%', '10%', '10%']}
          l={['3%', '-3%', '3%', '3%', '3%', '3%', '3%']}
          w={['90%', '30%', '20%', '30%', '20%', '30%', '20%']}
          h={['auto', '30%', '20%', '30%', '20%', '30%', '20%']}
        />
        <RotateBox />
        <H3>Hello, I'm Shaurya</H3>
        <Icon src={Shaurya} title="@jugshaurya" alt="shaurya" m="60px auto" />
        <Description w="60%">
          I enjoy developing Web Applications, which would assist the people
          around me to see new insight into the world; whether it is figuring
          out the data or to drive a new concept out of it or to build an
          already existing app that is changing the world. I enjoy all kinds of
          creating plus solving the problems that come along with the app.
        </Description>
        <Milestone>
          {/*  TODO: Add udacity certificate Link*/}
          <MilestoneLink href="/">A Certified React Developer</MilestoneLink>
          <MilestonePlace>
            graduated from <span> Udacity Nanodegree Program.</span>
          </MilestonePlace>
        </Milestone>
      </AboutMe>
      <Map style={{ marginTop: '260px' }}>
        <FloatingImage
          src={MapSVG}
          alt={'world Map'}
          style={{ opacity: '0.9' }}
          t={[0]}
          r={[0]}
        />
        <MapOverlay fd="column" jc="space-between">
          <MapOverlayTitle>Newly Learn-ed/ing</MapOverlayTitle>
          <MapOverlayLogos gtc="repeat(3, 1fr)" w="90%;" margin="0 auto">
            <MapOverlayLogo gtc="50px 100px">
              <Icon src={GraphqlIcon} w="44px" h="44px" m="0 10px 0 0" />
              <IconText>Graphql</IconText>
            </MapOverlayLogo>
            <MapOverlayLogo gtc="50px 100px">
              <Icon src={GatsbyIcon} w="44px" h="44px" m="0 10px 0 0" />
              <IconText>Gatsby</IconText>
            </MapOverlayLogo>
            <MapOverlayLogo gtc="50px 100px">
              <Icon src={FigmaIcon} w="44px" h="44px" m="0 10px 0 0" />
              <IconText>Figma</IconText>
            </MapOverlayLogo>
          </MapOverlayLogos>
        </MapOverlay>
      </Map>
    </section>
  );
};

export default About;

const IconText = styled.span`
  font-family: ${Styles.font_gloriahallelujah};
`;

const MapOverlay = styled(Flex)`
  padding-top: 100px;
  width: 50%;
  margin-left: auto;
`;

const MapOverlayTitle = styled.div`
  font-family: ${Styles.font_robotomono};
  margin-bottom: 100px;
  background: ${Styles.g_pinkBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const MapOverlayLogo = styled(Grid)``;
const MapOverlayLogos = styled(Grid)``;

const Map = styled.div`
  position: relative;
`;

const AboutMe = styled(Container)``;

const Milestone = styled.div`
  width: 60%;
  margin-left: auto;
  margin-top: 100px;
`;

const MilestoneLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-family: ${Styles.font_gloriahallelujah};
  font-size: ${Styles.text_xlarge};
  line-height: ${Styles.text_large};
  background: ${Styles.g_blackOrange};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MilestonePlace = styled.div`
  font-size: ${Styles.text_small};
  span {
    background: ${Styles.g_blueGreen3};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Description = styled.p`
  width: ${(props) => props.w};
  margin: 0 auto;
  font-size: ${Styles.text_small};
  line-height: ${Styles.text_medium};
  font-family: ${Styles.font_normal};
`;

const H3 = styled.h3`
  font-weight: 500;
  color: ${Styles.blue};
  font-family: ${Styles.font_normal};
  text-align: center;
`;

const RotateBox = styled.div`
  position: absolute;
  width: 335px;
  height: 303px;
  top: 600px;
  left: 40px;
  background: ${Styles.green};
  border-radius: 39px;
  transform: rotate(60deg);
  z-index: -2;
  animation: ${rotate} 4s linear infinite;
`;
