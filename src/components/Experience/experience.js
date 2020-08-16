import React from 'react';

import ExperienceBackground from '../../static/patterns/bg-experience.png';
import CardPattern1 from '../../static/patterns/cardoutline1.svg';
import CardPattern3 from '../../static/patterns/cardoutline3.svg';
import CodingNinjasIcon from '../../static/icons/codingninjas.png';
import NewCompanyLogo from '../../static/icons/newCompany.png';
import GoLiveLinksIcon from '../../static/icons/live.svg';
import ExperienceIcon from '../../static/icons/exp.svg';

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

import '../../styles/experience.scss';

const Experience = () => {
  return (
    <section
      id="experience"
      style={{ position: 'relative', marginTop: '200px' }}
    >
      <FloatingImage
        src={ExperienceBackground}
        alt={'Wallpaper'}
        style={{ transform: 'rotate(180deg)' }}
        t={[
          '-100px',
          '-480px',
          '-300px',
          '-220px',
          '-180px',
          '-180px',
          '-180px',
        ]}
        l={[0, 0, 0, 0, 0, 0, 0]}
        w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
        h={['auto', '100%', '100%', '100%', '100%', '100%', '100%']}
        zi={-3}
      />
      <Container style={{ position: 'relative' }}>
        <Title IconComp={ExperienceIcon} iconDesc={'Experience'} />
        <Grid gtc="repeat(2, 1fr)" gap="60px">
          <GridItem>
            <FloatingImage
              src={CardPattern1}
              alt={'Card Pattern 3'}
              style={{ transform: 'scale(1.1)' }}
              t={['0', '1%', '10%', '10%', '10%', '10%', '10%']}
              l={['0', '-3%', '3%', '3%', '3%', '3%', '3%']}
              w={['100%', '30%', '20%', '30%', '20%', '30%', '20%']}
              h={['100%', '30%', '20%', '30%', '20%', '30%', '20%']}
            />
            <CardContent>
              <CardTitle color={Styles.g_blackOrange}>
                Teaching Assistant @
              </CardTitle>
              <CardMain fd="column">
                <Icon
                  src={CodingNinjasIcon}
                  alt="Coding Ninjas"
                  w="108px"
                  h="64px"
                  m="0 10px 0 0"
                />
                <CardSubTitle color={Styles.g_blackOrange}>
                  Data Structures & <br />
                  Algorithms in Python
                </CardSubTitle>
              </CardMain>
              <CardDesc color={Styles.twitterBlue}>
                Solved 1500+ Doubts of more than 60 students divided over two
                batches.
              </CardDesc>
              <CardDesc color={Styles.twitterBlue}>
                Taking one to one doubt sessions over chat and video-call.
              </CardDesc>
              <CardDesc color={Styles.twitterBlue}>
                Debugging students’ Code for various types of errors in Basics
                and Advanced Data Structure and Algorithms in Python Language.
              </CardDesc>
              <CardBottom jc="space-between">
                <CardLinks>
                  <CardLink
                    href="https://ninjasfiles.s3.amazonaws.com/certificate1029dfe85af75e0c254af0f313a19ec6f82d.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      src={GoLiveLinksIcon}
                      alt="Certificate 1"
                      title="Initial 4 Months"
                      w="44px"
                      h="44px"
                    />
                  </CardLink>
                  <CardLink
                    href="https://ninjasfiles.s3.amazonaws.com/certificate1030f2c42e7de4802f70ad75bb78562d91be.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      src={GoLiveLinksIcon}
                      alt="Certificate 2"
                      title="Later 4 Months"
                      w="44px"
                      h="44px"
                    />
                  </CardLink>
                </CardLinks>
                <CardDate>(Jan 2019 - Sept 2019)</CardDate>
              </CardBottom>
            </CardContent>
          </GridItem>
          <GridItem style={{ transform: 'translateY(100px)' }}>
            <FloatingImage
              src={CardPattern3}
              alt={'Card Pattern 3'}
              style={{ transform: 'scale(1.1)' }}
              t={['0', '1%', '10%', '10%', '10%', '10%', '10%']}
              l={['0', '-3%', '3%', '3%', '3%', '3%', '3%']}
              w={['100%', '30%', '20%', '30%', '20%', '30%', '20%']}
              h={['100%', '30%', '20%', '30%', '20%', '30%', '20%']}
            />
            <CardContent>
              <CardTitle color={Styles.g_blueGreen}>@</CardTitle>
              <CardMain fd="column">
                <Icon
                  src={NewCompanyLogo}
                  alt="Coding Ninjas"
                  w="108px"
                  h="64px"
                  m="0 10px 0 0"
                />
                <CardSubTitle color={Styles.g_blueGreen}>
                  #position
                </CardSubTitle>
              </CardMain>
              <CardDesc color={Styles.twitterBlue}>
                <Icon
                  src={NewCompanyLogo}
                  alt="Coding Ninjas"
                  w="108px"
                  h="64px"
                  m="0 10px 0 0"
                />
              </CardDesc>{' '}
              <CardDesc color={Styles.twitterBlue}>
                <Icon
                  src={NewCompanyLogo}
                  alt="Coding Ninjas"
                  w="108px"
                  h="64px"
                  m="0 10px 0 0"
                />
              </CardDesc>{' '}
              <CardDesc color={Styles.twitterBlue}>
                <Icon
                  src={NewCompanyLogo}
                  alt="Coding Ninjas"
                  w="108px"
                  h="64px"
                  m="0 10px 0 0"
                />
              </CardDesc>
              <CardBottom jc="space-between">
                <CardLinks>
                  <CardLink
                    href="https://ninjasfiles.s3.amazonaws.com/certificate1029dfe85af75e0c254af0f313a19ec6f82d.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      src={GoLiveLinksIcon}
                      alt="Certificate 1"
                      title="Initial 4 Months"
                      w="44px"
                      h="44px"
                    />
                  </CardLink>
                  <CardLink
                    href="https://ninjasfiles.s3.amazonaws.com/certificate1030f2c42e7de4802f70ad75bb78562d91be.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      src={GoLiveLinksIcon}
                      alt="Certificate 2"
                      title="Later 4 Months"
                      w="44px"
                      h="44px"
                    />
                  </CardLink>
                </CardLinks>
                <CardDate>(From - To)</CardDate>
              </CardBottom>
            </CardContent>
          </GridItem>
        </Grid>
      </Container>
    </section>
  );
};

export default Experience;

const CardBottom = styled(Flex)`
  width: 60%;
  margin: 0 auto;
`;
const CardLinks = styled(Flex)``;
const CardLink = styled.a``;
const CardDate = styled.div`
  font-size: ${Styles.text_xxsmall};
`;

const CardContent = styled.div`
  width: 80%;
  margin: 60px auto;
  text-align: center;
`;

const CardTitle = styled.div`
  font-family: ${Styles.font_gabriela};
  background: ${(props) => props.color};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardMain = styled(Flex)`
  font-size: ${Styles.text_medium};
  margin: 40px auto;
`;

const CardSubTitle = styled.div`
  font-family: ${Styles.font_gloriahallelujah};
  font-size: ${Styles.text_xxsmall};
  background: ${(props) => props.color};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardDesc = styled.p`
  /* border: 3px solid red; */
  color: ${(props) => props.color};
  text-align: left;
  padding-left: 40px;
  margin-left: 80px;
  margin-bottom: 20px;
  font-family: ${Styles.font_normal};
  font-size: 0.6em;
  position: relative;
  width: 70%;

  &::before {
    content: '🌱';
    display: inline-block;
    font-size: ${Styles.text};
    position: absolute;
    top: 0;
    left: 15px;
  }
`;

const GridItem = styled.div`
  position: relative;
`;
