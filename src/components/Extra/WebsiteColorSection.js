import React from 'react';
import { WebsiteColors, WebsiteColor } from './WebsiteColorSection.styles';
import * as Styles from '../css-in-js/theme';
import copyToClipboard from '../../utils/copyToClipboard';
import { motion } from 'framer-motion';
const colors = [
  Styles.black,
  Styles.green,
  Styles.twitterBlue,
  Styles.darkgreen,
  Styles.orange,
  Styles.yellow,
  Styles.pink,
  Styles.red,
  Styles.blue,
  Styles.purple,
  Styles.mapPurple,
  Styles.g_blueGreen,
  Styles.g_pinkBluePurple,
  Styles.g_blackOrange,
  Styles.g_bluePurple,
  Styles.g_greenBluePink,
];

const WebsiteColorSection = () => {
  return (
    <WebsiteColors
      as={motion.div}
      animate={{ y: 0, x: [-20, 20, -20] }}
      transition={{
        type: 'tween',
        duration: 2,
        repeat: Infinity,
      }}
    >
      {colors.map((color) => (
        <WebsiteColor
          key={color}
          color={color}
          onClick={() => copyToClipboard(color)}
        />
      ))}
    </WebsiteColors>
  );
};

export default WebsiteColorSection;
