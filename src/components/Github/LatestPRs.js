import React from 'react';
import { Emojione } from 'react-emoji-render';

import { Container, Icon, FloatingImage } from '../styles-in-js/shared';
import { PRLists, PRList, H3, PRItem, Logo, PRDesc } from './LatestPR.styles';
import Title from '../styles-in-js/Title';

import SwigglyBG from '../../static/patterns/bg-swiggly.svg';
import PRIcon from '../../static/icons/PR.svg';
import TriangleIcon from '../../static/icons/triangle.svg';

const LatestPRs = ({ userSelfPRs, userContribPRs }) => {
  return (
    <Container style={{ position: 'relative' }}>
      <Title
        IconComp={PRIcon}
        iconDesc={'Latest Merged Pull Requests'}
        w={'36'}
        h={'36'}
      />
      <PRLists>
        <PRList>
          <FloatingImage
            style={{ transform: 'rotate(180deg)' }}
            src={TriangleIcon}
            alt={'TriangleIcon'}
            t={['0', '0', '0', '0', '0', '0', '0']}
            l={['45%', '45%', '45%', '45%', '45%', '45%', '45%']}
            o={['0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2']}
          />
          <H3>Open Source PRs'</H3>
          {userContribPRs.map((pr) => (
            <PRItem key={pr.id}>
              <Logo>
                <Icon
                  src={pr.repository.owner.avatarUrl}
                  alt={'Organization'}
                  title={pr.repository.owner.login}
                  w={'24'}
                  h={'24'}
                />
              </Logo>
              <PRDesc
                className="hover-white"
                href={pr.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Emojione text={pr.title} />
              </PRDesc>
            </PRItem>
          ))}
        </PRList>
        <PRList>
          <FloatingImage
            style={{ transform: 'rotate(180deg)' }}
            src={TriangleIcon}
            alt={'TriangleIcon'}
            t={[0, 0, 0, 0, 0, 0, 0]}
            l={['45%', '45%', '45%', '45%', '45%', '45%', '45%']}
            o={['0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2']}
          />
          <H3>Personal PRs'</H3>
          {userSelfPRs.map((pr) => (
            <PRItem key={pr.id}>
              <Logo>
                <Icon
                  src={pr.repository.owner.avatarUrl}
                  alt={'Organization'}
                  title={pr.repository.owner.login}
                  w={'24'}
                  h={'24'}
                />
              </Logo>
              <PRDesc
                className="hover-white"
                href={pr.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Emojione text={pr.title} />
              </PRDesc>
            </PRItem>
          ))}
        </PRList>
      </PRLists>
      <FloatingImage
        style={{ transform: 'rotate(-10deg)' }}
        src={SwigglyBG}
        alt={'SwigglyBG'}
        b={['-220px', '-220px', '-220px', '-220px', '-80px', '-80px', '-80px']}
        r={['-200px', '-220px', '-220px', '-220px', '-20px', '-20px', '-20px']}
        width={['40%', '40%', '40%', '40%', '40%', '40%', '40%']}
        o={['0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2']}
      />
    </Container>
  );
};

export default LatestPRs;
