import React from 'react';
import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import { Icon, FloatingImage, Flex } from '../css-in-js/shared';
import SwigglyBG from '../../static/patterns/bg-swiggly.svg';

const Title = ({ IconComp, iconDesc, w, h, m }) => {
  return (
    <SectionTitle>
      <Icon src={IconComp} alt={iconDesc} w={w} h={h} m={'0 15px 0 0'} />
      <H2>{iconDesc}</H2>
      <FloatingImage
        t={['0', '0']}
        l={['-40px', '-40px', '-40px', '-40px', '-40px', '-40px', '-40px']}
        w={['120px', '120px', '120px', '120px', '120px', '120px', '120px']}
        h={['120px', '120px', '120px', '120px', '120px', '120px', '120px']}
        src={SwigglyBG}
        alt={'swiggly bg'}
      />
    </SectionTitle>
  );
};

export default Title;

const H2 = styled.h2`
  @media ${Styles.device.mobileL} {
    font-size: ${Styles.text};
  }
`;

const SectionTitle = styled(Flex)`
  position: relative;
  justify-content: flex-start;
  margin-bottom: 80px;
`;
