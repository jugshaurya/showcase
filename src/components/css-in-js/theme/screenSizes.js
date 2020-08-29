const size = {
  mobileS: '360px', // Galaxy S5
  mobileM: '375px', // Iphone X
  mobileL: '414px', // Iphone +
  ipad: '768px', // tablet
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  ipad: `(max-width: ${size.ipad})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
};
