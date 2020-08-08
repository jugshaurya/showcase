import React from 'react';
import PRIcon from '../static/icons/PR.svg';
import TriangleIcon from '../static/icons/triangle.svg';
import LatestPRBackground from '../static/patterns/bg-swiggly.svg';
import '../styles/latestPRs.scss';

const LatestPRs = ({ jugshauryaPRs, otherPRs }) => {
  const filteredPRs = otherPRs.length > 15 ? otherPRs.slice(0, 15) : otherPRs;
  return (
    <div id="latestPRs" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="header">
          <img src={PRIcon} alt="PR icon" />
          <h2>
            Latest Merged Pull Requests <span>({filteredPRs.length})</span>
          </h2>
        </div>

        <div className="prs">
          <img className="triangle" src={TriangleIcon} alt="triangle" />
          {filteredPRs.map((pr) => (
            <div className="pr" key={pr.id}>
              <div className="logo">
                <img src={pr.repository.owner.avatarUrl} alt="contribution" />
              </div>
              <div className="text">{pr.title}</div>
            </div>
          ))}
        </div>

        <img
          id="latestPR-bg"
          src={LatestPRBackground}
          alt="latest PRs background"
        />
        <img
          id="latestPR-bg2"
          src={LatestPRBackground}
          alt="latest PRs background"
        />
      </div>
    </div>
  );
};

export default LatestPRs;
