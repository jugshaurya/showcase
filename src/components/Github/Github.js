import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

import GithubActivityOverview from './GithubActivityOverview';
import * as Styles from '../styles-in-js/theme';

import fetchGithubSvg from '../../utils/fetchGithubSvg';
import fetchGithubStats from '../../utils/fetchGithubStats';
import {
  Container,
  Icon,
  FloatingImage,
  Flex,
  Grid,
} from '../styles-in-js/shared';
import Title from '../styles-in-js/Title';

import LatestPRs from './LatestPRs';
import GithubBackground from '../../static/patterns/bg-github.svg';
import GithubGradIcon from '../../static/icons/githubgrad.svg';
import DotPattern1 from '../../static/patterns/dotpattern1.svg';
import DotPattern2 from '../../static/patterns/dotpattern2.svg';
import CommitIcon from '../../static/icons/commits.svg';
import IssueIcon from '../../static/icons/issues.svg';
import ContributionIcon from '../../static/icons/contributedto.svg';
import StarsIcon from '../../static/icons/stars.svg';
import PRIcon from '../../static/icons/PR.svg';
import Lady from '../../static/lady.svg';
import Boy from '../../static/boy.svg';
import '../../styles/github.scss';

const Github = () => {
  const [stats, setStats] = useState({
    name: '',
    totalStars: 0,
    totalIssues: 0,
    totalCommits: 0,
    totalPRs: 0,
    userSelfPRs: [],
    userContribPRs: [],
    totalContributedTo: 0,
    contributionRepos: [],
    totalPullRequestContributionsPercentage: 0,
    totalCommitContributionsPercentage: 0,
    totalIssueContributionsPercentage: 0,
    repositories: [],
  });

  const [svg, setSvg] = useState('');

  useEffect(() => {
    fetchGithubStats('jugshaurya').then((stats) => setStats(stats));
  }, []);

  useEffect(() => {
    fetchGithubSvg('jugshaurya').then((svg) => setSvg(svg));
  }, []);

  const {
    totalStars,
    totalIssues,
    totalCommits,
    totalPRs,
    userSelfPRs,
    userContribPRs,
    totalContributedTo,
    contributionRepos,
    totalPullRequestContributionsPercentage,
    totalCommitContributionsPercentage,
    totalIssueContributionsPercentage,
    repositories,
  } = stats;

  return (
    <section id="stats" style={{ position: 'relative', marginTop: '200px' }}>
      <FloatingImage
        src={GithubBackground}
        alt={'Wallpaper'}
        style={{ transform: 'rotate(180deg)' }}
        t={[
          '-620px',
          '-480px',
          '-300px',
          '-220px',
          '-180px',
          '-180px',
          '-180px',
        ]}
        l={[0, 0, 0, 0, 0, 0, 0]}
        w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
        zi={-3}
      />
      <Container>
        <Title
          IconComp={GithubGradIcon}
          iconDesc={'Github Stats'}
          w={'36px'}
          h={'36px'}
        />
        <Grid gtc={'repeat(5, 1fr)'} margin={'120px auto'}>
          <GithubAction>
            <GithubType
              IconComp={ContributionIcon}
              iconDesc={'Contributed to'}
            />
            <Counter>
              <CountUp start={0} end={totalContributedTo} duration={5} />
            </Counter>
          </GithubAction>
          <GithubAction>
            <Counter>
              <CountUp start={0} end={totalPRs} duration={5} />
            </Counter>
            <GithubType IconComp={PRIcon} iconDesc={'PRs'} />
          </GithubAction>
          <GithubAction>
            <GithubType IconComp={StarsIcon} iconDesc={'Stars'} />
            <Counter>
              <CountUp start={0} end={totalStars} duration={5} />
            </Counter>
          </GithubAction>
          <GithubAction>
            <Counter>
              <CountUp start={0} end={totalIssues} duration={5} />
            </Counter>
            <GithubType IconComp={IssueIcon} iconDesc={'Issues'} />
          </GithubAction>
          <GithubAction>
            <GithubType IconComp={CommitIcon} iconDesc={'Commits'} />
            <Counter>
              <CountUp start={0} end={totalCommits} duration={5} />
            </Counter>
          </GithubAction>
        </Grid>
      </Container>

      <Container>
        <Flex jc={'flex-end'}>
          <GithubActivityOverview
            githubContribSvg={svg}
            githubInfo={{
              totalPRsPercentage: totalPullRequestContributionsPercentage,
              totalIssuePercentage: totalIssueContributionsPercentage,
              totalCommitPercentage: totalCommitContributionsPercentage,
              orgs: contributionRepos,
              repos: repositories,
            }}
          />
        </Flex>
        <Flex jc={'flex-start'}>
          <Figure>
            <Embed src="https://wakatime.com/share/@jugshaurya/a750f08f-2404-4f77-8df8-849d0a8f4109.svg" />
          </Figure>
        </Flex>

        <FloatingImage
          src={DotPattern1}
          alt={'Dot Pattern 1'}
          style={{ transform: 'rotate(-9deg)', opacity: '0.6' }}
          t={['10%', '1%', '10%', '10%', '10%', '10%', '10%']}
          l={['3%', '-3%', '3%', '3%', '3%', '3%', '3%']}
          w={['20%', '30%', '20%', '30%', '20%', '30%', '20%']}
          zi={[-2]}
        />
        <FloatingImage
          src={DotPattern2}
          alt={'Dot Pattern 2'}
          style={{ transform: 'rotate(-15deg)', opacity: '0.8' }}
          b={['5%', '5%', '5%', '5%', '5%', '5%', '5%']}
          r={['5%', '1%', '5%', '5%', '5%', '5%', '5%']}
          w={['20%', '30%', '20%', '20%', '20%', '20%', '20%']}
          zi={[-2]}
        />
        <FloatingImage
          src={Lady}
          alt={'Lady'}
          t={['15%', '5%', '5%', '15%', '15%', '15%', '15%']}
          l={['0', '-10%', '-10%', '0', '0', '0', '0']}
          w={['40%', '40%', '40%', '40%', '40%', '40%', '40%']}
          h={['30%', '30%', '30%', '30%', '30%', '30%', '30%']}
        />
        <FloatingImage
          src={Boy}
          alt={'Boy'}
          b={['10%', '10%', '10%', '10%', '10%', '10%', '10%']}
          r={['5%', '-5%', '-5%', '5%', '5%', '5%', '5%']}
          w={['20%', '30%', '30%', '20%', '20%', '20%', '20%']}
          h={['20%', '20%', '20%', '20%', '20%', '20%', '20%']}
        />
      </Container>
      {/* Render only top 15 results */}
      <LatestPRs
        userSelfPRs={userSelfPRs.slice(0, 15)}
        userContribPRs={userContribPRs.slice(0, 15)}
      />
    </section>
  );
};

export default Github;

const GithubAction = styled.div`
  /* border: 3px solid gray; */
`;

const Type = styled.div`
  border: 4px dashed ${Styles.gray};
  text-align: center;
  align-items: center;
  padding: 5px;
  color: ${Styles.gray};
`;

const GithubType = ({ IconComp, iconDesc }) => {
  return (
    <Type>
      <Icon
        w={'24px'}
        h={'24px'}
        m={'0 8px 0 0'}
        src={IconComp}
        alt={iconDesc}
      />{' '}
      {iconDesc}
    </Type>
  );
};

const Counter = styled.div`
  text-align: center;
  font-weight: bold;
  line-height: ${Styles.text_large};
  font-size: ${Styles.text_xxlarge};
  color: ${Styles.twitterBlue};
`;

const Figure = styled.figure`
  width: 70%;
  margin-top: 80px;
  border: 1px solid ${Styles.gray};
  border-radius: 50px;
  box-shadow: 5px 5px 10px ${Styles.background};
  padding: 30px;
`;

const Embed = styled.embed`
  width: 100%;
  height: 523px;
  border-radius: 48px;
`;
