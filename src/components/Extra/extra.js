import React from 'react';

import BackToTopSection from './BackToTopSection';
import WebsiteColorSection from './WebsiteColorSection';
import CreditSection from './CreditSection';
import Title from '../shared/Title';

import { Container, FloatingImage } from '../css-in-js/shared';

import ExtraBG from '../../static/patterns/bg-credit.svg';
import ExtraIcon from '../../static/icons/extra.svg';

const Extra = () => {
  return (
    <section style={{ position: 'relative' }}>
      <FloatingImage
        src={ExtraBG}
        alt={'Wallpaper'}
        t={['-300px', '-200px', '-100px', '-100px', '0', '50px', '50px']}
        l={[0, 0, 0, 0, 0, 0, 0]}
        w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
        zi={-3}
      />
      <Container className="container">
        <Title
          IconComp={ExtraIcon}
          iconDesc={'Credits/Thank you + Extras'}
          w={'36'}
          h={'36'}
        />
        <BackToTopSection />
        <WebsiteColorSection />
        <CreditSection />
      </Container>
    </section>
  );
};

export default Extra;
