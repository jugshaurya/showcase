import React from 'react';
import renderHTML from 'react-render-html';

import renderContribSvg from './renderContribSvg';
import { Icon } from '../styles-in-js/shared';

import {
  GithubActivitySection,
  ScrollableSvg,
  GithubActivities,
  GithubActivity,
  ActivityHeading,
  Activity,
  GithubOrganization,
  GithubRepo,
  GithubGraph,
} from './GithubActivityOverview.styles';
import { white, text_xxsmall } from '../styles-in-js/theme';

// Helper Method
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

const GithubActivityOverview = ({ githubContribSvg, githubInfo }) => {
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
      <GithubActivities>
        <GithubActivity>
          <ActivityHeading> Recently Contributed to </ActivityHeading>
          <Activity>
            {/* Showing only 5 of them */}
            {uniqueOrgs.slice(0, 5).map((org) => (
              <GithubOrganization key={org.owner.id}>
                <Icon
                  src={org.owner.avatarUrl}
                  alt={org.owner.login}
                  w={'24'}
                  h={'24'}
                  m={'0 5px 0 0'}
                />
                {org.owner.login}
              </GithubOrganization>
            ))}
          </Activity>
          <ActivityHeading> Currently Working on </ActivityHeading>
          <Activity>
            {/* Showing only 3 of them */}
            {repos.slice(0, 3).map((repo) => (
              <>
                {/* // TODO: Update href */}
                <GithubRepo href="/" key={repo.id}>
                  {repo.nameWithOwner}
                </GithubRepo>
                <span style={{ color: white, textDecoration: 'none' }}>
                  &nbsp;,&nbsp;
                </span>
              </>
            ))}
            <span style={{ fontSize: text_xxsmall }}>more...</span>
          </Activity>
        </GithubActivity>
        <GithubActivity>
          <GithubGraph>
            {renderHTML(
              renderContribSvg(
                totalIssuePercentage,
                totalCommitPercentage,
                totalPRsPercentage
              )
            )}
          </GithubGraph>
        </GithubActivity>
      </GithubActivities>
    </GithubActivitySection>
  );
};

export default GithubActivityOverview;
