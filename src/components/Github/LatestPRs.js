import React from 'react';
import { Emojione } from 'react-emoji-render';
import styled from 'styled-components';

import { Container, Flex, Icon, FloatingImage } from '../styles-in-js/shared';
import Title from '../styles-in-js/Title';
import * as Styles from '../styles-in-js/theme';

import SwigglyBG from '../../static/patterns/bg-swiggly.svg';
import PRIcon from '../../static/icons/PR.svg';
import TriangleIcon from '../../static/icons/triangle.svg';
import '../../styles/latestPRs.scss';

const PRList = styled(Flex)`
  position: relative;
  width: 50%;
  margin: 0 auto;
  border-radius: 45px;
`;

const PRItem = styled(Flex)`
  width: 100%;
  border-radius: 15px;
  padding: 5px 10px;
  border-left: 10px solid ${Styles.mapPurple};
  border-bottom: 2px solid ${Styles.gray};
  &:hover {
    background: ${Styles.mapPurple};
    .hover-white {
      color: ${Styles.white};
      font-weight: bold;
    }
  }
`;

const Logo = styled(Flex)`
  overflow: hidden;
  background: ${Styles.black};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  text-align: center;
  border: 1px dashed ${Styles.gray};
`;

const PRDesc = styled.a`
  width: 85%;
  cursor: pointer;
  text-decoration: none;
  color: ${Styles.gray};
  font-size: ${Styles.text_xsmall};
  letter-spacing: 0.02em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px;
  padding-left: 20px;
  span {
    img {
      width: 22px !important;
      height: 22px !important;
    }
  }
`;

const LatestPRs = ({ userSelfPRs, userContribPRs }) => {
  return (
    <Container style={{ position: 'relative' }}>
      <Title
        IconComp={PRIcon}
        iconDesc={'Latest Merged Pull Requests'}
        w={'36px'}
        h={'36px'}
      />
      <Flex gap={'40px'}>
        <PRList fd="column">
          <FloatingImage
            style={{ opacity: '0.2', transform: 'rotate(180deg)' }}
            src={TriangleIcon}
            alt={'TriangleIcon'}
            t={[0]}
            l={['45%']}
          />
          <h3>Open Source PRs'</h3>
          {userContribPRs.map((pr) => (
            <PRItem key={pr.id}>
              <Logo>
                <Icon
                  src={pr.repository.owner.avatarUrl}
                  alt={'Organization'}
                  title={pr.repository.owner.login}
                  w={'24px'}
                  h={'24px'}
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
        <PRList fd="column">
          <FloatingImage
            style={{ opacity: '0.2', transform: 'rotate(180deg)' }}
            src={TriangleIcon}
            alt={'TriangleIcon'}
            t={[0]}
            l={['45%']}
          />
          <h3>Personal PRs'</h3>
          {userSelfPRs.map((pr) => (
            <PRItem key={pr.id}>
              <Logo>
                <Icon
                  src={pr.repository.owner.avatarUrl}
                  alt={'Organization'}
                  title={pr.repository.owner.login}
                  w={'24px'}
                  h={'24px'}
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
      </Flex>
      <FloatingImage
        style={{ opacity: '0.2', transform: 'rotate(-10deg)' }}
        src={SwigglyBG}
        alt={'SwigglyBG'}
        b={['-220px']}
        r={['-200px']}
        width={['40%']}
      />
    </Container>
  );
};

export default LatestPRs;
