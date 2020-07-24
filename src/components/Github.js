import React from 'react';
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

const Github = () => {
  return (
    <div id="github" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="header">
          <img src={GithubGradIcon} alt="github icon" />
          <h2>Github Stats</h2>
        </div>
        <div className="values">
          <div className="value">
            <div className="count">4</div>
            <div className="type">
              <img src={ContributionIcon} alt="contribution" />
              Contributed to
            </div>
          </div>
          <div className="value">
            <div className="count">30</div>
            <div className="type">
              <img src={PRIcon} alt="PRs" />
              PRs
            </div>
          </div>
          <div className="value">
            <div className="count">400</div>
            <div className="type">
              <img src={StarsIcon} alt="stars" />
              Stars
            </div>
          </div>
          <div className="value">
            <div className="count">100</div>
            <div className="type">
              <img src={IssueIcon} alt="issues" />
              Issues
            </div>
          </div>
          <div className="value">
            <div className="count">100K</div>
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
