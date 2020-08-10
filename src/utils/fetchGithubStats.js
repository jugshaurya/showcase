import axios from 'axios';
/*
- Fetching Attributes via username
  - 1. Total Stars
  - 2. Total Issues Opened
  - 3. Total Commits Made
  - 4. Total PRs (merged, opened, closed) and their details
  - 5. Total Repos Contributed to and their details

  - 6. total (PR + Issue + commit+ totalPRReviews) values and their percetages for contribution graph
  - 7. repositories
*/

const GITHUB_API_URL = 'https://api.github.com/graphql';
const options = {
  url: GITHUB_API_URL,
  method: 'post',
  // TODO: Beware: API can be leaked @clientside: Issue #40
  headers: {
    Authorization: `Bearer ${process.env.GATSBY_GITHUB_ACCESS_TOKEN}`,
  },
};

const fetchGithubStats = async (username) => {
  const res = await axios({
    ...options,
    data: {
      query: `
      query PersonStats($login: String!) {
        user(login: $login) {
          name
          repositoriesContributedTo(
            first: 100
            contributionTypes: [
              COMMIT
              PULL_REQUEST
              PULL_REQUEST_REVIEW
              ISSUE
              REPOSITORY
            ]
          ) {
            totalCount
            nodes {
              id
              name
              owner {
                id
                login
                avatarUrl
              }
            }
          }
  
          contributionsCollection {
            totalIssueContributions
            totalCommitContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
          }
  
          pullRequests(
            first: 100
            states: [OPEN, MERGED, CLOSED]
            orderBy: { field: CREATED_AT, direction: DESC }
          ) {
            nodes {
              id
              url
              state
              title
              repository {
                id
                nameWithOwner
                languages(first: 5) {
                  nodes {
                    id
                    name
                  }
                }
                owner {
                  url
                  login
                  avatarUrl
                }
              }
            }
          }
  
          repositories(
            first: 100
            isFork: false
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            nodes {
              id
              nameWithOwner
              updatedAt
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    `,
      variables: {
        login: username,
      },
    },
  });

  const stats = {
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
  };

  const {
    user: {
      name,
      repositoriesContributedTo,
      contributionsCollection: {
        totalIssueContributions,
        totalCommitContributions,
        totalPullRequestContributions,
        totalPullRequestReviewContributions,
      },
      repositories,
      pullRequests,
    },
  } = res.data.data;

  // 1st Checkpoint
  stats.name = name;

  // 2nd Checkpoint
  stats.totalStars = repositories.nodes.reduce(
    (acc, node) => acc + node.stargazers.totalCount,
    0
  );
  stats.totalIssues = totalIssueContributions;
  stats.totalCommits = totalCommitContributions;
  stats.totalPRs =
    totalPullRequestReviewContributions + totalPullRequestContributions;

  // 3rd Checkpoint - O(2n) === O(n)
  stats.userSelfPRs = pullRequests.nodes.filter(
    (node) => node.repository.owner.login === username
  );

  stats.userContribPRs = pullRequests.nodes.filter(
    (node) => node.repository.owner.login !== username
  );

  // 4th Checkpoint
  stats.totalContributedTo = repositoriesContributedTo.totalCount;
  stats.contributionRepos = repositoriesContributedTo.nodes;

  // 5th Checkpoint
  const totalContributions =
    totalCommitContributions +
    totalPullRequestContributions +
    totalIssueContributions +
    totalPullRequestReviewContributions;
  stats.totalCommitContributionsPercentage =
    totalCommitContributions / totalContributions;
  stats.totalIssueContributionsPercentage =
    totalIssueContributions / totalContributions;
  stats.totalPullRequestContributionsPercentage =
    totalPullRequestContributions / totalContributions;

  // 6th Checkpoint
  stats.repositories = repositories.nodes;

  return stats;
};

export default fetchGithubStats;
