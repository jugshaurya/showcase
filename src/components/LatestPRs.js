import React from 'react';
import PRIcon from '../static/icons/PR.svg';
import TriangleIcon from '../static/icons/triangle.svg';
import LatestPRBackground from '../static/patterns/bg-swiggly.svg';
import { Emojione } from 'react-emoji-render';
import '../styles/latestPRs.scss';

const LatestPRs = ({ jugshauryaPRs, otherPRs }) => {
  const filteredPRs = otherPRs.length > 15 ? otherPRs.slice(0, 15) : otherPRs;
  const filteredjugshauryaPRs =
    jugshauryaPRs.length > 15 ? jugshauryaPRs.slice(0, 15) : jugshauryaPRs;
  return (
    <div id="latestPRs" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="header">
          <img src={PRIcon} alt="PR icon" />
          <h2>
            Latest Merged Pull Requests <span>({15} each)</span>
          </h2>
        </div>

        <div className="pppr">
          <div className="prs">
            <h3>Open Source Prs</h3>
            <img className="triangle" src={TriangleIcon} alt="triangle" />
            {filteredPRs.map((pr) => (
              <div className="pr" key={pr.id}>
                <div className="logo">
                  <img src={pr.repository.owner.avatarUrl} alt="contribution" />
                </div>
                <a
                  href={pr.url}
                  className="text"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Emojione text={pr.title} />
                </a>
              </div>
            ))}
          </div>
          <div className="prs">
            <h3>Personal PRs</h3>
            <img className="triangle" src={TriangleIcon} alt="triangle" />
            {filteredjugshauryaPRs.map((pr) => (
              <div className="pr rightBorder" key={pr.id}>
                <div className="logo">
                  <img src={pr.repository.owner.avatarUrl} alt="contribution" />
                </div>
                <a
                  href={pr.url}
                  className="text"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Emojione text={pr.title} />
                </a>
              </div>
            ))}
          </div>
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
