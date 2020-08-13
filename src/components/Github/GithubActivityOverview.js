import React from 'react';
import renderHTML from 'react-render-html';

import styled from 'styled-components';
import { Flex, Icon } from '../styles-in-js/shared';
import * as Styles from '../styles-in-js/theme';

const getUniqueOrganizationArrayBasedOnOwnerId = (objArray) => {
  // Create a new Set to store unique Elements
  const s = new Set();
  // Fill Set with only unique objects based on `ownerid`.
  objArray.map((obj) => s.add(obj.owner.id));

  // Don't include same id valued object again by filtering and
  // removing the id from set once we got a obj with id not seen earlier
  return objArray.filter((obj) => {
    if (s.has(obj.owner.id)) {
      s.delete(obj.owner.id);
      return true;
    }
    return false;
  });
};

const GithubActivitySection = styled.div`
  border-radius: 48px;
  border: 1px solid ${Styles.gray};
  align-self: flex-end;
  width: 70%;
  padding: 30px;
`;

const GithubActivity = styled.div`
  border-right: 1px solid ${Styles.gray};
  width: 50%;
  margin: 20px;
`;

const ActivityHeading = styled.div`
  margin: 10px 0;
  font-size: ${Styles.text_small};
  color: ${Styles.green};
`;

const GithubOrganization = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px dashed ${Styles.gray};
  font-size: ${Styles.text_xsmall};
`;

const GithubRepo = styled.a`
  text-decoration: underline;
  font-size: ${Styles.text_xxsmall};
  color: ${Styles.blue};
  display: inline-block;
`;

const ScrollableSvg = styled.div`
  width: 80%;
  margin: 0 auto;
  direction: rtl;
  overflow-x: scroll;
  svg {
    background: ${Styles.black};
    font-size: 0.7em;
    text {
      fill: ${Styles.gray};
      font-size: 0.8em;
    }
  }
`;

const GithubGraph = styled.div`
  width: 100%;
  svg {
    margin-left: 40px;
    font-size: 0.8em;
    fill: ${Styles.gray};
    overflow: visible;
    text {
      font-size: 0.7em;
    }
  }
`;

const createGithubActivityOverview = ({ githubContribSvg, githubInfo }) => {
  const {
    totalPRsPercentage,
    totalCommitPercentage,
    totalIssuePercentage,
    orgs,
    repos,
  } = githubInfo;

  const uniqueOrgs = getUniqueOrganizationArrayBasedOnOwnerId(orgs);

  return (
    <GithubActivitySection>
      <ScrollableSvg>
        {renderHTML(
          githubContribSvg
            .replace(/#ebedf0/g, '#222222')
            .replace(/#9be9a8/g, '#4fffa7')
            .replace(/#40c463/g, '#3DDC84')
            .replace(/#30a14e/g, '#008D41')
            .replace(/#216e39/g, '#00753b')
        )}
      </ScrollableSvg>
      <Flex>
        <GithubActivity>
          <ActivityHeading> Recently Contributed to </ActivityHeading>
          <Flex jc={'start'} fw={'wrap'}>
            {/* Showing only 5 of them */}
            {uniqueOrgs.slice(0, 5).map((org) => (
              <GithubOrganization key={org.owner.id}>
                <Icon
                  src={org.owner.avatarUrl}
                  alt={org.owner.login}
                  w={'24px'}
                  h={'24px'}
                  mr={'5px'}
                />
                {org.owner.login}
              </GithubOrganization>
            ))}
          </Flex>
          <ActivityHeading> Recently Worked on </ActivityHeading>
          <Flex jc={'start'} fw={'wrap'}>
            {/* Showing only 3 of them */}
            {repos.slice(0, 3).map((repo) => (
              <>
                {/* // TODO: Update href */}
                <GithubRepo href="/" key={repo.id}>
                  {repo.nameWithOwner}
                </GithubRepo>
                <span style={{ color: Styles.white, textDecoration: 'none' }}>
                  &nbsp;,&nbsp;
                </span>
              </>
            ))}
            <span style={{ fontSize: Styles.text_xxsmall }}>more...</span>
          </Flex>
        </GithubActivity>
        <GithubActivity>
          <GithubGraph>
            {renderHTML(
              contribGraphSvg(
                totalIssuePercentage,
                totalCommitPercentage,
                totalPRsPercentage
              )
            )}
          </GithubGraph>
        </GithubActivity>
      </Flex>
    </GithubActivitySection>
  );
};

// TODO :Correct it by modifying line 108 (path's d value)
const contribGraphSvg = (
  totalIssuePercentage,
  totalCommitPercentage,
  totalPRsPercentage
) => {
  return `<svg className="mx-auto d-block" xmlns="http://www.w3.org/2000/svg" width="287" height="255">
      <g transform="translate(-21.0166015625, -44.3499755859375)">
      <path
        className="js-highlight-blob"
        strokeLinejoin="round"
        fill="#56b8ff"
        stroke="#56b8ff"
        strokeWidth="7"
        d="M171.5,171.5 L179.59105663764768,171.5 L171.5,175.19430876941215 L85.36666870117188,171.5 z"
      ></path>
        <line
          fill="#e9fa66"
          stroke="#e9fa66"
          strokeWidth="2"
          strokeLinecap="round"
          className="js-highlight-x-axis activity-overview-axis "
          x1="81.36666870117188"
          y1="171.5"
          x2="261.6333312988281"
          y2="171.5"
        ></line>
        <line
          fill="#e9fa66"
          stroke="#e9fa66"
          strokeWidth="2"
          strokeLinecap="round"
          className="js-highlight-y-axis activity-overview-axis "
          x1="171.5"
          y1="81.36666870117188"
          x2="171.5"
          y2="261.6333312988281"
        ></line>
        <ellipse
          className="activity-overview-point js-highlight-right-ellipse "
          rx="3"
          ry="3"
          strokeWidth="2"
          fill="white"
          cx="181.59105663764768"
          cy="171.5"
        ></ellipse>
        <ellipse
          className="activity-overview-point js-highlight-bottom-ellipse "
          rx="3"
          ry="3"
          strokeWidth="2"
          fill="white"
          cx="171.5"
          cy="177.19430876941215"
        ></ellipse>
        <ellipse
          className="activity-overview-point js-highlight-left-ellipse "
          rx="3"
          ry="3"
          strokeWidth="2"
          fill="white"
          cx="83.36666870117188"
          cy="171.5"
        ></ellipse>
        <text
          textAnchor="middle"
          className="activity-overview-percentage js-highlight-percent-top"
          dx="171.5"
          dy="55.366668701171875"
        >
          &nbsp;
        </text>
        <text
          textAnchor="middle"
          className="text-small activity-overview-label js-highlight-label-top"
          dx="171.5"
          dy="71.36666870117188"
        >
          Code review
        </text>
        <text
          textAnchor="start"
          className="activity-overview-percentage js-highlight-percent-right"
          dy="169.5"
          dx="278.96666717529297"
        >
          ${Math.floor(totalIssuePercentage * 100)}%
        </text>
        <text
          textAnchor="start"
          className="text-small activity-overview-label js-highlight-label-right"
          dy="185.5"
          dx="271.6333312988281"
        >
          Issues
        </text>
        <text
          textAnchor="middle"
          className="activity-overview-percentage js-highlight-percent-bottom"
          dx="171.5"
          dy="278.6333312988281"
        >
          ${Math.floor(totalPRsPercentage * 100)}%
        </text>
        <text
          textAnchor="middle"
          className="text-small activity-overview-label js-highlight-label-bottom"
          dx="171.5"
          dy="294.6333312988281"
        >
          Pull requests
        </text>
        <text
          textAnchor="end"
          className="activity-overview-percentage js-highlight-percent-left"
          dy="169.5"
          dx="55.69166564941406"
        >
          ${Math.floor(totalCommitPercentage * 100)}%
        </text>
        <text
          textAnchor="end"
          className="text-small activity-overview-label js-highlight-label-left"
          dy="185.5"
          dx="69.36666870117188"
        >
          Commits
        </text>
      </g>
    </svg>
  `;
};

export default createGithubActivityOverview;
