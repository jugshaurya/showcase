import React from 'react';

import styled from 'styled-components';
import {
  Container,
  Flex,
  FloatingImage,
  Icon,
  Grid,
} from '../styles-in-js/shared';
import * as Styles from '../styles-in-js/theme';

import LanguagesBackground from '../../static/patterns/bg-languages.svg';
import CardPattern1 from '../../static/patterns/cardoutline1.svg';
import CardPattern2 from '../../static/patterns/cardoutline2.svg';
import CardPattern3 from '../../static/patterns/cardoutline3.svg';
import JSIcon from '../../static/icons/js.svg';
import PythonIcon from '../../static/icons/python.svg';
import CIcon from '../../static/icons/c.svg';

import '../../styles/languages.scss';

const Languages = () => {
  return (
    <article className="languages" style={{ position: 'relative' }}>
      <FloatingImage
        src={LanguagesBackground}
        alt={'Language BG'}
        t={['-25%', '1%', '10%', '10%', '10%', '10%', '10%']}
        l={['0', '-3%', '3%', '3%', '3%', '3%', '3%']}
        w={['100vw', '30%', '20%', '30%', '20%', '30%', '20%']}
      />

      <Container>
        <Grid gtc="repeat(3, 1fr)" gap="60px">
          <GridItem style={{ transform: 'translateY(200px)' }}>
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
              <CardTitle color={Styles.g_blackOrange}>
                Tertiary Language
              </CardTitle>
              <CardMain>
                <Icon
                  src={CIcon}
                  alt="C++ Icon"
                  w="64px"
                  h="64px"
                  m="0 10px 0 0"
                />
                <CardSubTitle>C++</CardSubTitle>
              </CardMain>
              <CardDesc color={Styles.darkgreen}>
                First Language that introduced me to the Coding World. Concepts
                of OOPS made me understand how computer mocks/maps real world
                entities.
              </CardDesc>
              <CardDesc color={Styles.darkgreen}>
                Made it easy to learn other languages.
              </CardDesc>
              <CardDesc color={Styles.darkgreen}>
                I use it for Competitive Programming.
              </CardDesc>
            </CardContent>
          </GridItem>
          <GridItem style={{ transform: 'translateY(100px)' }}>
            <FloatingImage
              src={CardPattern2}
              alt={'Card Pattern 2'}
              style={{ transform: 'scale(1.1)' }}
              t={['0', '1%', '10%', '10%', '10%', '10%', '10%']}
              l={['0', '-3%', '3%', '3%', '3%', '3%', '3%']}
              w={['100%', '30%', '20%', '30%', '20%', '30%', '20%']}
              h={['100%', '30%', '20%', '30%', '20%', '30%', '20%']}
            />
            <CardContent>
              <CardTitle color={Styles.g_blueGreen}>
                Secondary Language
              </CardTitle>
              <CardMain>
                <Icon
                  src={PythonIcon}
                  alt="Python Icon"
                  w="64px"
                  h="64px"
                  m="0 10px 0 0"
                />
                <CardSubTitle>Python</CardSubTitle>
              </CardMain>
              <CardDesc color={Styles.red}>
                A Language that helped me explore the world of Machine Learning
                and Jupyter Notebooks and eventually helped in getting my first
                Internship as a TA; helping students learn DATA STRUCTURE &
                ALGORITHMS.
              </CardDesc>
              <CardDesc color={Styles.red}>
                View blogs I wrote while learning ML & Python and learn from it.
              </CardDesc>
            </CardContent>
          </GridItem>
          <GridItem>
            <FloatingImage
              src={CardPattern1}
              alt={'Card Pattern 1'}
              style={{ transform: 'scale(1.1)' }}
              t={['0', '1%', '10%', '10%', '10%', '10%', '10%']}
              l={['0', '-3%', '3%', '3%', '3%', '3%', '3%']}
              w={['100%', '30%', '20%', '30%', '20%', '30%', '20%']}
              h={['100%', '30%', '20%', '30%', '20%', '30%', '20%']}
            />
            <CardContent>
              <CardTitle color={Styles.g_blueRed}>Primary Language</CardTitle>
              <CardMain>
                <Icon
                  src={JSIcon}
                  alt="Javascript Icon"
                  w="64px"
                  h="64px"
                  m="0 10px 0 0"
                />
                <CardSubTitle>JavaScript</CardSubTitle>
              </CardMain>
              <CardDesc color={Styles.blue}>
                Javascript gave me the power to build all my Personal Projects.
              </CardDesc>
              <CardDesc color={Styles.blue}>
                I love the default Functional Programming Paradigm of
                JavaScript, which lead me to write clean code and maintain the
                purity of it.
              </CardDesc>
              <CardDesc color={Styles.blue}>
                React, Redux, Graphql, Gatsby are all the instrument that I use
                to create Beautiful Harmonies with Javascript.
              </CardDesc>
            </CardContent>
          </GridItem>
        </Grid>
      </Container>
    </article>
  );
};

export default Languages;

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
`;

const CardDesc = styled.p`
  color: ${(props) => props.color};
  text-align: left;
  padding-left: 40px;
  margin-bottom: 20px;
  font-family: ${Styles.font_normal};
  font-size: 0.6em;
  position: relative;

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
