import React from 'react';
import { Container, FloatingImage, Icon } from '../css-in-js/shared';
import * as Styles from '../css-in-js/theme';

import {
  Article,
  Cards,
  Card,
  CardContent,
  CardTitle,
  CardMain,
  CardSubTitle,
  CardDesc,
} from './Languages.styles';

import LanguagesBackground from '../../static/patterns/bg-languages.svg';
import CardPattern1 from '../../static/patterns/cardoutline1.svg';
import CardPattern2 from '../../static/patterns/cardoutline2.svg';
import CardPattern3 from '../../static/patterns/cardoutline3.svg';
import JSIcon from '../../static/icons/js.svg';
import PythonIcon from '../../static/icons/python.svg';
import CIcon from '../../static/icons/c.svg';

const Languages = () => {
  return (
    <Article id="languages">
      <FloatingImage
        src={LanguagesBackground}
        alt={'Language BG'}
        t={['-25%', '-5%', '-25%', '-25%', '-25%', '-25%', '-25%']}
        w={['100vw', '100vw', '100vw', '100vw', '100vw', '100vw', '100vw']}
        h={['auto', 'auto', 'auto', 'auto', '400px', 'auto', 'auto']}
      />

      <Container>
        <Cards>
          <Card className="tertiary">
            <FloatingImage
              src={CardPattern3}
              alt={'Card Pattern 3'}
              t={['0', '0', '0', '0', '0', '0', '0']}
              l={['0', '0', '0', '0', '0', '0', '0']}
              w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
              h={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
              transform={[
                'scale(1.1)',
                'scale(1.1)',
                'scale(1.3)',
                'scale(1.3)',
                'scale(1.1)',
                'scale(1)',
                'scale(1)',
              ]}
            />
            <CardContent>
              <CardTitle color={Styles.g_blackOrange}>
                Tertiary Language
              </CardTitle>
              <CardMain>
                <Icon src={CIcon} alt="C++ Icon" w="64" h="64" m="0 10px 0 0" />
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
          </Card>
          <Card className="secondary">
            <FloatingImage
              src={CardPattern2}
              alt={'Card Pattern 2'}
              t={['0', '0', '0', '0', '0', '0', '0']}
              l={['0', '0', '0', '0', '0', '0', '0']}
              w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
              h={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
              transform={[
                'scale(1.1)',
                'scale(1.1)',
                'scale(1.3)',
                'scale(1.1)',
                'scale(1.05)',
                'scale(1.1)',
                'scale(1.1)',
              ]}
            />
            <CardContent>
              <CardTitle color={Styles.g_blueGreen}>
                Secondary Language
              </CardTitle>
              <CardMain>
                <Icon
                  src={PythonIcon}
                  alt="Python Icon"
                  w="64"
                  h="64"
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
          </Card>
          <Card className="primary">
            <FloatingImage
              src={CardPattern1}
              alt={'Card Pattern 1'}
              t={['0', '0', '0', '0', '0', '0', '0']}
              l={['0', '0', '0', '0', '0', '0', '0']}
              w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
              h={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
              transform={[
                'scale(1)',
                'scale(1.1)',
                'scale(1.3)',
                'scale(1.1)',
                'scale(1)',
                'scale(1)',
                'scale(1)',
              ]}
            />
            <CardContent>
              <CardTitle color={Styles.g_blueRed}>Primary Language</CardTitle>
              <CardMain>
                <Icon
                  src={JSIcon}
                  alt="Javascript Icon"
                  w="64"
                  h="64"
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
          </Card>
        </Cards>
      </Container>
    </Article>
  );
};

export default Languages;
