import styled from 'styled-components';
import * as Styles from '../../src/components/css-in-js/theme';

const checkTypeAndUse = (val, index) =>
  typeof val === 'string' ? val : val[index];

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(p) =>
    (p.gtc && checkTypeAndUse(p.gtc, 0)) || 'repeat(2, 1fr)'};
  justify-content: ${(p) => (p.jc && checkTypeAndUse(p.jc, 0)) || 'center'};
  align-content: ${(p) => (p.ai && checkTypeAndUse(p.ai, 0)) || 'center'};
  gap: ${(p) => (p.gap && checkTypeAndUse(p.gap, 0)) || 0};
  row-gap: ${(p) => (p.rgap && checkTypeAndUse(p.rgap, 0)) || 0};
  margin: ${(p) => (p.margin && checkTypeAndUse(p.margin, 0)) || 'auto'};
  width: ${(p) => (p.w && checkTypeAndUse(p.w, 0)) || 'initial'};

  @media ${Styles.device.laptopL} {
    grid-template-columns: ${(p) =>
      (p.gtc && checkTypeAndUse(p.gtc, 1)) || 'repeat(2, 1fr)'};
    justify-content: ${(p) => (p.jc && checkTypeAndUse(p.jc, 1)) || 'center'};
    align-content: ${(p) => (p.ai && checkTypeAndUse(p.ai, 1)) || 'center'};
    gap: ${(p) => (p.gap && checkTypeAndUse(p.gap, 1)) || 0};
    row-gap: ${(p) => (p.rgap && checkTypeAndUse(p.rgap, 1)) || 0};
    margin: ${(p) => (p.margin && checkTypeAndUse(p.margin, 1)) || 'auto'};
    width: ${(p) => (p.w && checkTypeAndUse(p.w, 1)) || 'initial'};
  }

  @media ${Styles.device.laptop} {
    grid-template-columns: ${(p) =>
      (p.gtc && checkTypeAndUse(p.gtc, 2)) || 'repeat(2, 1fr)'};
    justify-content: ${(p) => (p.jc && checkTypeAndUse(p.jc, 2)) || 'center'};
    align-content: ${(p) => (p.ai && checkTypeAndUse(p.ai, 2)) || 'center'};
    gap: ${(p) => (p.gap && checkTypeAndUse(p.gap, 2)) || 0};
    row-gap: ${(p) => (p.rgap && checkTypeAndUse(p.rgap, 2)) || 0};
    margin: ${(p) => (p.margin && checkTypeAndUse(p.margin, 2)) || 'auto'};
    width: ${(p) => (p.w && checkTypeAndUse(p.w, 2)) || 'initial'};
  }

  @media ${Styles.device.ipad} {
    grid-template-columns: ${(p) =>
      (p.gtc && checkTypeAndUse(p.gtc, 3)) || 'repeat(2, 1fr)'};
    justify-content: ${(p) => (p.jc && checkTypeAndUse(p.jc, 3)) || 'center'};
    align-content: ${(p) => (p.ai && checkTypeAndUse(p.ai, 3)) || 'center'};
    gap: ${(p) => (p.gap && checkTypeAndUse(p.gap, 3)) || 0};
    row-gap: ${(p) => (p.rgap && checkTypeAndUse(p.rgap, 3)) || 0};
    margin: ${(p) => (p.margin && checkTypeAndUse(p.margin, 3)) || 'auto'};
    width: ${(p) => (p.w && checkTypeAndUse(p.w, 3)) || 'initial'};
  }

  @media ${Styles.device.mobileL} {
    grid-template-columns: ${(p) =>
      (p.gtc && checkTypeAndUse(p.gtc, 4)) || 'repeat(2, 1fr)'};
    justify-content: ${(p) => (p.jc && checkTypeAndUse(p.jc, 4)) || 'center'};
    align-content: ${(p) => (p.ai && checkTypeAndUse(p.ai, 4)) || 'center'};
    gap: ${(p) => (p.gap && checkTypeAndUse(p.gap, 4)) || 0};
    row-gap: ${(p) => (p.rgap && checkTypeAndUse(p.rgap, 4)) || 0};
    margin: ${(p) => (p.margin && checkTypeAndUse(p.margin, 4)) || 'auto'};
    width: ${(p) => (p.w && checkTypeAndUse(p.w, 4)) || 'initial'};
  }

  @media ${Styles.device.mobileM} {
    grid-template-columns: ${(p) =>
      (p.gtc && checkTypeAndUse(p.gtc, 5)) || 'repeat(2, 1fr)'};
    justify-content: ${(p) => (p.jc && checkTypeAndUse(p.jc, 5)) || 'center'};
    align-content: ${(p) => (p.ai && checkTypeAndUse(p.ai, 5)) || 'center'};
    gap: ${(p) => (p.gap && checkTypeAndUse(p.gap, 5)) || 0};
    row-gap: ${(p) => (p.rgap && checkTypeAndUse(p.rgap, 5)) || 0};
    margin: ${(p) => (p.margin && checkTypeAndUse(p.margin, 5)) || 'auto'};
    width: ${(p) => (p.w && checkTypeAndUse(p.w, 5)) || 'initial'};
  }

  @media ${Styles.device.mobileS} {
    grid-template-columns: ${(p) =>
      (p.gtc && checkTypeAndUse(p.gtc, 6)) || 'repeat(2, 1fr)'};
    justify-content: ${(p) => (p.jc && checkTypeAndUse(p.jc, 6)) || 'center'};
    align-content: ${(p) => (p.ai && checkTypeAndUse(p.ai, 6)) || 'center'};
    gap: ${(p) => (p.gap && checkTypeAndUse(p.gap, 6)) || 0};
    row-gap: ${(p) => (p.rgap && checkTypeAndUse(p.rgap, 6)) || 0};
    margin: ${(p) => (p.margin && checkTypeAndUse(p.margin, 6)) || 'auto'};
    width: ${(p) => (p.w && checkTypeAndUse(p.w, 6)) || '100%'};
  }
`;
