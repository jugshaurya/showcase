import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import { Flex, Icon } from '../css-in-js/shared';

import BackIcon from '../../static/icons/back.svg';

const BackToTopSection = () => {
  return (
    <BackToTop>
      <BackLink to="#navbar">
        Back to Top
        <Icon src={BackIcon} alt={'back Icon'} w="24" h="24" m={'0 0 0 10px'} />
      </BackLink>
    </BackToTop>
  );
};

export default BackToTopSection;

const BackToTop = styled(Flex)`
  margin-top: 30px;
  text-decoration: underline;
`;

const BackLink = styled(Link)`
  color: ${Styles.green};
  font-size: ${Styles.text_small};
  text-decoration: none;
`;
