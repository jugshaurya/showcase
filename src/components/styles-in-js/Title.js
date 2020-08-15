import React from 'react';
import { SectionTitle, Icon, FloatingImage } from './shared';
import SwigglyBG from '../../static/patterns/bg-swiggly.svg';

const Title = ({ IconComp, iconDesc, w, h, m }) => {
  return (
    <SectionTitle jc="flex-start" style={{ position: 'relative' }}>
      <Icon src={IconComp} alt={iconDesc} w={w} h={h} m={'0 15px 0 0'} />
      <h2>{iconDesc}</h2>
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
