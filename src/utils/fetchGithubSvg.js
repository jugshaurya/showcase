const SERVER_URL = 'https://productive-weekday-server.vercel.app';

const fetchGithubSvg = async (username) => {
  const svgURL = `${SERVER_URL}/user/${username}?requireSvg=true`;
  const response = await fetch(svgURL);
  const result = await response.text();
  return result;
};

export default fetchGithubSvg;
