import React from 'react';

// TODO :Correct it by modifying line 108 (path's d value)
const renderContribSvg = (
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

export default renderContribSvg;
