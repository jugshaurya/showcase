const SERVER_URL = 'https://productive-weekday-server.vercel.app';

const fetchGithubSvg = async (username) => {
  const svgURL = `${SERVER_URL}/user/${username}`;
  const response = await fetch(svgURL);
  const result = await response.json();
  return result;
};

export default fetchGithubSvg;
