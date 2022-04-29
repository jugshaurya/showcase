import React from 'react';
import {
  AboutMe,
  AboutBackground,
  RotateBox,
  H3,
  ShauIcon,
  Description,
  Milestone,
  MilestoneLink,
  MilestonePlace,
  Map,
  MapOverlay,
  MapOverlayTitle,
  MapOverlayLogos,
  MapOverlayLogo,
  IconText,
} from './About.styles';

import Languages from './Languages';
import { FloatingImage, Icon } from '../css-in-js/shared';

import ShauryaBackground from '../../static/patterns/bg-shaurya.svg';
import Shaurya from '../../static/shaurya.png';
import MapSVG from '../../static/map.svg';
import GraphqlIcon from '../../static/icons/graphql.svg';
import GatsbyIcon from '../../static/icons/gatsby.svg';
import FigmaIcon from '../../static/icons/figma.svg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ position: 'relative', marginTop: '150px' }}>
      <Languages />
      <article className="languages" style={{ position: 'relative' }}>
        <AboutMe data-aos="fade-in">
          <AboutBackground
            src={ShauryaBackground}
            alt={'Shaurya BG'}
            t={['10%', '10%', '10%', '15%', '25%', '30%', '25%']}
            l={['3%', '3%', '3%', '3%', '3%', '3%', '3%']}
            w={['90%', '90%', '90%', '100%', '100%', '100%', '100%']}
            h={['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto']}
            o={['0.7', '0.7', '0.7', '0.7', '0.7', '0.7', '0.7']}
          />
          <RotateBox />
          <H3>Hello, I'm Shaurya</H3>
          <ShauIcon
            as={motion.img}
            whileHover={{ scale: 1.2, rotate: 45, borderRadius: '10%' }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: '100%',
            }}
            src={Shaurya}
            title="@jugshaurya"
            alt="shaurya"
            m="60px auto"
          />
          <Description>
            I enjoy developing Web Applications, which would assist the people
            around me to see new insight into the world; whether it is figuring
            out the data or to drive a new concept out of it or to build an
            already existing app that is changing the world. I enjoy all kinds
            of creating plus solving the problems that come along with the app.
          </Description>
          <Milestone>
            <MilestoneLink href="https://confirm.udacity.com/QQN2KHS5">
              A Certified React Developer
            </MilestoneLink>
            <MilestonePlace>
              graduated from <span> Udacity Nanodegree Program.</span>
            </MilestonePlace>
          </Milestone>
        </AboutMe>
        <Map data-aos="fade-in">
          <FloatingImage
            src={MapSVG}
            alt={'world Map'}
            t={['0', '0', '0', '0', '0', '0', '0']}
            r={['0', '0', '0', '0', '0', '0', '0']}
            o={['0.8', '0.8', '0.8', '0.8', '0.8', '0.8', '0.8']}
          />
          <MapOverlay fd="column" jc="space-between">
            <MapOverlayTitle>Newly Learn-ed/ing</MapOverlayTitle>
            <MapOverlayLogos>
              <MapOverlayLogo>
                <Icon src={GraphqlIcon} w="44" h="44" m="0 10px 0 0" />
                <IconText>Graphql</IconText>
              </MapOverlayLogo>
              <MapOverlayLogo>
                <Icon src={GatsbyIcon} w="44" h="44" m="0 10px 0 0" />
                <IconText>Gatsby</IconText>
              </MapOverlayLogo>
              <MapOverlayLogo>
                <Icon src={FigmaIcon} w="44" h="44" m="0 10px 0 0" />
                <IconText>Figma</IconText>
              </MapOverlayLogo>
            </MapOverlayLogos>
          </MapOverlay>
        </Map>
      </article>
    </section>
  );
};

export default About;
