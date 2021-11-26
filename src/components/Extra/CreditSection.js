import React from 'react';

import CreditArticle from './CreditArticle';

import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';

import {
  attributionLinks,
  featureLinks,
  techLinks,
  codeLinks,
} from '../../resources/creditLinks';

const CreditSection = () => {
  return (
    <Credits>
      <CreditArticle credits={attributionLinks}>Attributions</CreditArticle>
      <CreditArticle credits={techLinks}>
        Tech Used for this Creation
      </CreditArticle>
      <CreditArticle credits={featureLinks}>Site Features</CreditArticle>
      <CreditArticle credits={codeLinks}>Wanna Contribute ?</CreditArticle>
    </Credits>
  );
};

export default CreditSection;

const Credits = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  row-gap: 60px;

  @media ${Styles.device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
    margin-top: 40px;
  }
`;
