import axios from 'axios';

const STATS_API_URL = 'https://productive-weekday-server.vercel.app/mystats';

const options = {
  url: STATS_API_URL,
  method: 'get',
};

// Actual code: https://github.com/jugshaurya/productive-weekday/blob/master/visuald3server/api/getGithubStats.js
// TODO: make backend take username and return his/her stats
const fetchGithubStats = async (username) => {
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

  const { data: stats } = await axios({
    ...options,
  });

  return stats;
};

export default fetchGithubStats;
