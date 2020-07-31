import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

import '../styles/github.scss';

const fetchGithubStats = async (username) => {
  const query = `
    query shauStats($login: String!) {
      user(login: $login) {
        name
        repositoriesContributedTo(first: 100, contributionTypes: [COMMIT, PULL_REQUEST, ISSUE, REPOSITORY]) {
          totalCount
        }
        pullRequests(first: 100) {
          totalCount
        }
        repositories(first: 100) {
          nodes {
            stargazers {
              totalCount
            }
          }
        }
        issues(first: 100) {
          totalCount
        }
        contributionsCollection {
          totalCommitContributions
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
    totalPRs: 0,
    totalStars: 0,
    totalIssues: 0,
    totalCommits: 0,
  };

  const user = res.data.data.user;
  stats.name = user.name;
  stats.totalContributedTo = user.repositoriesContributedTo.totalCount;
  stats.totalPRs = user.pullRequests.totalCount;
  stats.totalIssues = user.issues.totalCount;
  stats.totalCommits = user.contributionsCollection.totalCommitContributions;
  stats.totalStars = user.repositories.nodes.reduce(
    (acc, node) => acc + node.stargazers.totalCount,
    0
  );

  const currencyBinder = (amount) => {
    return amount >= 1000 ? `${amount / 1000}K` : amount;
  };

  stats.totalContributedTo = currencyBinder(stats.totalContributedTo);
  stats.totalPRs = currencyBinder(stats.totalPRs);
  stats.totalIssues = currencyBinder(stats.totalIssues);
  stats.totalCommits = currencyBinder(stats.totalCommits);
  stats.totalStars = currencyBinder(stats.totalStars);

  return stats;
};

const Github = () => {
  const [stats, setStats] = useState({
    name: '',
    totalContributedTo: 0,
    totalPRs: 0,
    totalStars: 0,
    totalIssues: 0,
    totalCommits: 0,
  });

  useEffect(() => {
    fetchGithubStats('jugshaurya').then((stats) => setStats(stats));
  }, [fetchGithubStats]);

  return (
    <div id="github" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="header">
          <img src={GithubGradIcon} alt="github icon" />
          <h2>Github Stats</h2>
        </div>
        <div className="values">
          <div className="value">
            <div className="count">{stats.totalContributedTo}</div>
            <div className="type">
              <img src={ContributionIcon} alt="contribution" />
              Contributed to
            </div>
          </div>
          <div className="value">
            <div className="count">{stats.totalPRs}</div>
            <div className="type">
              <img src={PRIcon} alt="PRs" />
              PRs
            </div>
          </div>
          <div className="value">
            <div className="count">{stats.totalStars}</div>
            <div className="type">
              <img src={StarsIcon} alt="stars" />
              Stars
            </div>
          </div>
          <div className="value">
            <div className="count">{stats.totalIssues}</div>
            <div className="type">
              <img src={IssueIcon} alt="issues" />
              Issues
            </div>
          </div>
          <div className="value">
            <div className="count">{stats.totalCommits}</div>
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
            <img id="stats" src={GithubStats} alt="github-stats-later" />
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

      <img id="github-bg2" src={GithubBackground2} alt="Github background 2" />
      <img id="github-bg3" src={GithubBackground2} alt="Github background 3" />
      <img id="github-bg" src={GithubBackground} alt="github background" />
    </div>
  );
};

export default Github;
