import React from 'react';

import {
  ExperienceSection,
  Cards,
  Card,
  CardContent,
  CardTitle,
  CardMain,
  CardSubTitle,
  CardDesc,
  CardBottom,
  CardLinks,
  CardLink,
  CardDate,
} from './Experience.styles';
import Title from '../styles-in-js/Title';
import { Container, FloatingImage, Icon } from '../styles-in-js/shared';
import * as Styles from '../styles-in-js/theme';

import ExperienceBackground from '../../static/patterns/bg-experience.png';
import CardPattern1 from '../../static/patterns/cardoutline1.svg';
import CardPattern3 from '../../static/patterns/cardoutline3.svg';
import CodingNinjasIcon from '../../static/icons/codingninjas.png';
import NewCompanyLogo from '../../static/icons/newCompany.png';
import GoLiveLinksIcon from '../../static/icons/live.svg';
import ExperienceIcon from '../../static/icons/exp.svg';

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <FloatingImage
        src={ExperienceBackground}
        alt={'Wallpaper'}
        style={{ transform: 'rotate(180deg)' }}
        t={['-100px', '-60px', '-30px', '-100px', '-100px', '-100px', '-100px']}
        l={[0, 0, 0, 0, 0, 0, 0]}
        w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
        zi={-3}
      />
      <Container>
        <Title IconComp={ExperienceIcon} iconDesc={'Experience'} />
        <Cards>
          <Card>
            <FloatingImage
              src={CardPattern1}
              alt={'Card Pattern 3'}
              t={['0', '0', '0', '0', '0', '0', '0']}
              l={['0', '0', '0', '0', '0', '0', '0']}
              w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
              h={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
            />
            <CardContent>
              <CardTitle color={Styles.g_pinkBluePurple}>
                Teaching Assistant @
              </CardTitle>
              <CardMain>
                <Icon
                  src={CodingNinjasIcon}
                  alt="Coding Ninjas"
                  w="108"
                  h="64"
                  m="0 10px 0 0"
                />
                <CardSubTitle color={Styles.g_pinkBluePurple}>
                  Data Structures & <br />
                  Algorithms in Python
                </CardSubTitle>
              </CardMain>
              <CardDesc color={Styles.gray}>
                Solved 1500+ Doubts of more than 60 students divided over two
                batches.
              </CardDesc>
              <CardDesc color={Styles.gray}>
                Taking one to one doubt sessions over chat and video-call.
              </CardDesc>
              <CardDesc color={Styles.gray}>
                Debugging students’ Code for various types of errors in Basics
                and Advanced Data Structure and Algorithms in Python Language.
              </CardDesc>
              <CardBottom>
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
                      w="44"
                      h="44"
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
                      w="44"
                      h="44"
                    />
                  </CardLink>
                </CardLinks>
                <CardDate>(Jan 2019 - Sept 2019)</CardDate>
              </CardBottom>
            </CardContent>
          </Card>
          <Card style={{ transform: 'translateY(100px)' }}>
            <FloatingImage
              src={CardPattern3}
              alt={'Card Pattern 3'}
              t={['0', '0', '0', '0', '0', '0', '0']}
              l={['0', '0', '0', '0', '0', '0', '0']}
              w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
              h={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
            />
            <CardContent>
              <CardTitle color={Styles.g_blueGreen}>@</CardTitle>
              <CardMain>
                <Icon
                  src={NewCompanyLogo}
                  alt="Coding Ninjas"
                  w="108"
                  h="64"
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
                  w="108"
                  h="64"
                  m="0 10px 0 0"
                />
              </CardDesc>{' '}
              <CardDesc color={Styles.twitterBlue}>
                <Icon
                  src={NewCompanyLogo}
                  alt="Coding Ninjas"
                  w="108"
                  h="64"
                  m="0 10px 0 0"
                />
              </CardDesc>
              <CardDesc color={Styles.twitterBlue}>
                <Icon
                  src={NewCompanyLogo}
                  alt="Coding Ninjas"
                  w="108"
                  h="64"
                  m="0 10px 0 0"
                />
              </CardDesc>
              <CardBottom>
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
                      w="44"
                      h="44"
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
                      w="44"
                      h="44"
                    />
                  </CardLink>
                </CardLinks>
                <CardDate>(From - To)</CardDate>
              </CardBottom>
            </CardContent>
          </Card>
        </Cards>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
