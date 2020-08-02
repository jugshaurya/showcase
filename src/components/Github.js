import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import renderHTML from 'react-render-html';

import GithubBackground2 from '../static/patterns/bg-swiggly.svg';
import GithubBackground from '../static/patterns/bg-github.svg';
import GithubGradIcon from '../static/icons/githubgrad.svg';
import DotPattern1 from '../static/patterns/dotpattern1.svg';
import DotPattern2 from '../static/patterns/dotpattern2.svg';
import CommitIcon from '../static/icons/commits.svg';
import IssueIcon from '../static/icons/issues.svg';
import ContributionIcon from '../static/icons/contributedto.svg';
import StarsIcon from '../static/icons/stars.svg';
import PRIcon from '../static/icons/PR.svg';
import GithubStats from '../static/github-stats.svg';
import Lady from '../static/lady.svg';
import Boy from '../static/boy.svg';
import LatestPRs from './LatestPRs';

import '../styles/github.scss';

const fetchGithubStats = async (username) => {
  const query = `
    query shauStats($login: String!) {
      user(login: $login) {
        name
        repositoriesContributedTo(first: 100, contributionTypes: [COMMIT, PULL_REQUEST, PULL_REQUEST_REVIEW, ISSUE, REPOSITORY]) {
          nodes{
            name
            id
            owner {
              id
              login
              avatarUrl
            }
          }
          totalCount
        }
        contributionsCollection{
          totalIssueContributions
          totalCommitContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
        }
        pullRequests(first: 100, states: [OPEN, MERGED, CLOSED], orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            id
            title
            url
            state
            repository {
              id
              nameWithOwner
              languages(first : 5){
                nodes{
                  id
                  name
                }
              }
              owner{
                url
                login
                avatarUrl
              }
            }
          }
        }
        repositories(first: 100,  isFork: false, orderBy: {field:UPDATED_AT , direction: DESC}) {
          nodes {
            nameWithOwner
            updatedAt
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  `;

  const res = await axios({
    url: 'https://api.github.com/graphql',
    method: 'post',
    headers: {
      Authorization: `Bearer ${process.env.GATSBY_GITHUB_ACCESS_TOKEN}`,
    },
    data: {
      query: query,
      variables: {
        login: username,
      },
    },
  });

  const stats = {
    name: '',
    totalContributedTo: 0,
    totalStars: 0,
    totalIssues: 0,
    totalCommits: 0,
    totalPRs: 0,
    totalPullRequestContributionsPercentage: 0,
    totalCommitContributionsPercentage: 0,
    totalIssueContributionsPercentage: 0,
    contributionRepos: [],
    jugshauryaPRs: [],
    otherPRs: [],
    repositories: [],
  };

  const user = res.data.data.user;
  stats.name = user.name;
  stats.totalContributedTo = user.repositoriesContributedTo.totalCount;
  stats.totalPRs =
    user.contributionsCollection.totalPullRequestReviewContributions +
    user.contributionsCollection.totalPullRequestContributions;
  stats.totalIssues = user.contributionsCollection.totalIssueContributions;
  stats.totalCommits = user.contributionsCollection.totalCommitContributions;
  stats.contributionRepos = user.repositoriesContributedTo.nodes;
  stats.totalStars = user.repositories.nodes.reduce(
    (acc, node) => acc + node.stargazers.totalCount,
    0
  );
  stats.jugshauryaPRs = user.pullRequests.nodes.filter(
    (node) => node.repository.owner.login === 'jugshaurya'
  );
  stats.otherPRs = user.pullRequests.nodes.filter(
    (node) => node.repository.owner.login !== 'jugshaurya'
  );
  stats.repositories = user.repositories.nodes;
  const totalContributions =
    user.contributionsCollection.totalCommitContributions +
    user.contributionsCollection.totalPullRequestContributions +
    user.contributionsCollection.totalIssueContributions;

  stats.totalCommitContributionsPercentage =
    user.contributionsCollection.totalCommitContributions / totalContributions;
  stats.totalIssueContributionsPercentage =
    user.contributionsCollection.totalIssueContributions / totalContributions;
  stats.totalPullRequestContributionsPercentage =
    user.contributionsCollection.totalPullRequestContributions /
    totalContributions;

  const currencyBinder = (amount) => {
    return amount >= 1000 ? `${Math.round(amount / 1000)}K` : amount;
  };

  stats.totalContributedTo = currencyBinder(stats.totalContributedTo);
  stats.totalPRs = currencyBinder(stats.totalPRs);
  stats.totalIssues = currencyBinder(stats.totalIssues);
  stats.totalCommits = currencyBinder(stats.totalCommits);
  stats.totalStars = currencyBinder(stats.totalStars);

  return stats;
};

const GithubStatsGraph = (svg, totals) => {
  const {
    totalPRsPercentage,
    totalCommitPercentage,
    totalIssuePercentage,
  } = totals;
  return (
    <div className="github-stats">
      <div className="svg" style={{ background: 'white' }}>
        {renderHTML(svg)}
      </div>
      <div className="stats">
        <svg
          class="mx-auto d-block"
          xmlns="http://www.w3.org/2000/svg"
          width="287"
          height="255"
        >
          <g transform="translate(-21.0166015625, -44.3499755859375)">
            <path
              class="js-highlight-blob"
              stroke-linejoin="round"
              fill="#40c463"
              stroke="#40c463"
              stroke-width="7"
              d="M171.5,171.5 L179.59105663764768,171.5 L171.5,175.19430876941215 L85.36666870117188,171.5 z"
            ></path>
            <line
              fill="#e9fa66"
              stroke="#e9fa66"
              stroke-width="2"
              stroke-linecap="round"
              class="js-highlight-x-axis activity-overview-axis "
              x1="81.36666870117188"
              y1="171.5"
              x2="261.6333312988281"
              y2="171.5"
            ></line>
            <line
              fill="#e9fa66"
              stroke="#e9fa66"
              stroke-width="2"
              stroke-linecap="round"
              class="js-highlight-y-axis activity-overview-axis "
              x1="171.5"
              y1="81.36666870117188"
              x2="171.5"
              y2="261.6333312988281"
            ></line>
            <ellipse
              class="activity-overview-point js-highlight-top-ellipse d-none"
              rx="3"
              ry="3"
              stroke-width="2"
              fill="white"
            ></ellipse>
            <ellipse
              class="activity-overview-point js-highlight-right-ellipse "
              rx="3"
              ry="3"
              stroke-width="2"
              fill="white"
              cx="181.59105663764768"
              cy="171.5"
            ></ellipse>
            <ellipse
              class="activity-overview-point js-highlight-bottom-ellipse "
              rx="3"
              ry="3"
              stroke-width="2"
              fill="white"
              cx="171.5"
              cy="177.19430876941215"
            ></ellipse>
            <ellipse
              class="activity-overview-point js-highlight-left-ellipse "
              rx="3"
              ry="3"
              stroke-width="2"
              fill="white"
              cx="83.36666870117188"
              cy="171.5"
            ></ellipse>
            <text
              text-anchor="middle"
              class="activity-overview-percentage js-highlight-percent-top"
              dx="171.5"
              dy="55.366668701171875"
            >
              &nbsp;
            </text>
            <text
              text-anchor="middle"
              class="text-small activity-overview-label js-highlight-label-top"
              dx="171.5"
              dy="71.36666870117188"
            >
              Code review
            </text>
            <text
              text-anchor="start"
              class="activity-overview-percentage js-highlight-percent-right"
              dy="169.5"
              dx="278.96666717529297"
            >
              {totalIssuePercentage}
            </text>
            <text
              text-anchor="start"
              class="text-small activity-overview-label js-highlight-label-right"
              dy="185.5"
              dx="271.6333312988281"
            >
              Issuese9fa66
            </text>
            <text
              text-anchor="middle"
              class="activity-overview-percentage js-highlight-percent-bottom"
              dx="171.5"
              dy="278.6333312988281"
            >
              {totalPRsPercentage}
            </text>
            <text
              text-anchor="middle"
              class="text-small activity-overview-label js-highlight-label-bottom"
              dx="171.5"
              dy="294.6333312988281"
            >
              Pull requests
            </text>
            <text
              text-anchor="end"
              class="activity-overview-percentage js-highlight-percent-left"
              dy="169.5"
              dx="55.69166564941406"
            >
              {totalCommitPercentage}
            </text>
            <text
              text-anchor="end"
              class="text-small activity-overview-label js-highlight-label-left"
              dy="185.5"
              dx="69.36666870117188"
            >
              Commits
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

const fetchContribSvg = async () => {
  const SERVER_URL = 'https://productive-weekday-server.jugshaurya.now.sh';
  const response = await fetch(`${SERVER_URL}/user/jugshaurya?requireSvg=true`);
  const result = await response.text();
  return result;
};

const Github = () => {
  const [stats, setStats] = useState({
    name: '',
    totalContributedTo: 0,
    totalPRs: 0,
    totalStars: 0,
    totalIssues: 0,
    totalCommits: 0,
    contributionRepos: [],
    jugshauryaPRs: [],
    otherPRs: [],
  });
  const [svg, setSvg] = useState('');

  useEffect(() => {
    fetchGithubStats('jugshaurya').then((stats) => setStats(stats));
  }, []);

  useEffect(() => {
    fetchContribSvg('jugshaurya').then((svg) => setSvg(svg));
  }, []);

  return (
    <>
      <div id="github" style={{ position: 'relative' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div className="header">
            <img src={GithubGradIcon} alt="github icon" />
            <h2>Github Stats</h2>
          </div>
          <div className="values">
            <div className="value">
              <div className="count">
                <CountUp
                  start={0}
                  end={stats.totalContributedTo}
                  duration={5}
                />
              </div>
              <div className="type">
                <img src={ContributionIcon} alt="contribution" />
                Contributed to
              </div>
            </div>
            <div className="value">
              {' '}
              <div className="count">
                <CountUp start={0} end={stats.totalPRs} duration={5} />
              </div>
              <div className="type">
                <img src={PRIcon} alt="PRs" />
                PRs
              </div>
            </div>
            <div className="value">
              <div className="count">
                <CountUp start={0} end={stats.totalStars} duration={5} />
              </div>
              <div className="type">
                <img src={StarsIcon} alt="stars" />
                Stars
              </div>
            </div>
            <div className="value">
              <div className="count">
                <CountUp start={0} end={stats.totalIssues} duration={5} />
              </div>
              <div className="type">
                <img src={IssueIcon} alt="issues" />
                Issues
              </div>
            </div>
            <div className="value">
              <div className="count">
                <CountUp start={0} end={stats.totalCommits} duration={4} />
              </div>
              <div className="type">
                <img src={CommitIcon} alt="commits" />
                Commits
              </div>
            </div>
          </div>
          <div className="github-info"></div>
        </div>

        <div className="graphs">
          <div className="container">
            {/* TODO */}
            <div className="github-stats">
              {GithubStatsGraph(svg, {
                totalPRsPercentage:
                  stats.totalPullRequestContributionsPercentage,
                totalIssuePercentage: stats.totalIssueContributionsPercentage,
                totalCommitPercentage: stats.totalCommitContributionsPercentage,
              })}
              {/* <img id="stats" src={GithubStats} alt="github-stats-later" /> */}
            </div>
            <figure className="wakatime-langs">
              <embed src="https://wakatime.com/share/@jugshaurya/a750f08f-2404-4f77-8df8-849d0a8f4109.svg" />
            </figure>
            <img id="pattern1" src={DotPattern1} alt="dot pattern 1" />
            <img id="lady" src={Lady} alt="lady" title="Lady" />
            <img id="pattern2" src={DotPattern2} alt="dot pattern 2" />
            <img id="boy" src={Boy} alt="shaurya" title="shaurya" />
          </div>
        </div>

        <img
          id="github-bg2"
          src={GithubBackground2}
          alt="Github background 2"
        />
        <img
          id="github-bg3"
          src={GithubBackground2}
          alt="Github background 3"
        />
        <img id="github-bg" src={GithubBackground} alt="github background" />
      </div>
      <LatestPRs
        jugshauryaPRs={stats.jugshauryaPRs}
        otherPRs={stats.otherPRs}
      />
    </>
  );
};

export default Github;
