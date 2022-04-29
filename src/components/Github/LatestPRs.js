import React from 'react';
import { Emojione } from 'react-emoji-render';
import { motion } from 'framer-motion';

import { Container, Icon, FloatingImage } from '../css-in-js/shared';
import { PRLists, PRList, H3, PRItem, Logo, PRDesc } from './LatestPR.styles';
import Title from '../shared/Title';

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
        <PRList
          as={motion.div}
          drag="x"
          dragConstraints={{ left: -50, right: 50 }}
          // initial={{ x: 0 }}
          // animate={{ x: -50 }}
        >
          <FloatingImage
            as={motion.img}
            animate={{
              x: 0,
              y: [20, -20, 20],
              borderBottom: '10px double #56b8ff',
              rotate: 270,
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              damping: 10,
              stiffness: 100,
              duration: 2,
              repeat: Infinity,
            }}
            src={TriangleIcon}
            alt={'TriangleIcon'}
            t={['0', '0', '0', '0', '0', '0', '0']}
            l={['45%', '45%', '45%', '45%', '45%', '45%', '45%']}
            o={['0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2']}
          />
          <H3>Open Source PRs'</H3>
          {userContribPRs.map((pr) => (
            <PRItem
              key={pr.id}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Logo
                as={motion.div}
                animate={{
                  rotate: [10, -10, 10],
                  y: [0, 0, 0],
                  x: [-5, 5, -5],
                }}
                transition={{
                  type: 'spring',
                  damping: 10,
                  stiffness: 100,
                  duration: 2,
                  repeat: Infinity,
                }}
              >
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
        <PRList
          as={motion.div}
          drag="x"
          dragConstraints={{ left: -50, right: 50 }}
        >
          <FloatingImage
            as={motion.img}
            animate={{
              x: 0,
              y: [20, -20, 20],
              borderBottom: '10px double #56b8ff',
              rotate: 180,
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              damping: 10,
              stiffness: 100,
              duration: 2,
              repeat: Infinity,
            }}
            src={TriangleIcon}
            alt={'TriangleIcon'}
            t={[0, 0, 0, 0, 0, 0, 0]}
            l={['45%', '45%', '45%', '45%', '45%', '45%', '45%']}
            o={['0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2']}
          />
          <H3>Personal PRs'</H3>
          {userSelfPRs.map((pr) => (
            <PRItem
              key={pr.id}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Logo
                as={motion.div}
                animate={{
                  rotate: [10, -10, 10],
                  y: [0, 0, 0],
                  x: [-5, 5, -5],
                }}
                transition={{
                  type: 'spring',
                  damping: 10,
                  stiffness: 100,
                  duration: 2,
                  repeat: Infinity,
                }}
              >
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
        as={motion.img}
        animate={{ x: 0, y: [10, -10, 10] }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 100,
          duration: 2,
          repeat: Infinity,
        }}
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
