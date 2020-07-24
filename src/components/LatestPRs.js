import React from 'react';
import PRIcon from '../static/icons/PR.svg';
import TriangleIcon from '../static/icons/triangle.svg';
import LatestPRBackground from '../static/patterns/bg-swiggly.svg';
import '../styles/latestPRs.scss';

const LatestPRs = () => {
  return (
    <div id="latestPRs" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="header">
          <img src={PRIcon} alt="PR icon" />
          <h2>
            Latest Merged Pull Requests <span>(15)</span>
          </h2>
        </div>

        <div className="prs">
          <img className="triangle" src={TriangleIcon} alt="triangle" />
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
          </div>
          <div className="pr">
            <div className="logo">
              <img src={PRIcon} alt="contribution" />
            </div>
            <div className="text">
              PR 1: Some Commmit Meassge... Some Commmit Meassge...Some Commmit
              Some Commmit Some Commmit Some Commmit
            </div>
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
