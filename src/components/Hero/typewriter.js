import React from 'react';

const TypeWriterLoadedClientSideOnlyLazy = React.lazy(() =>
  import('react-typewriter-effect')
);

// To make `react-typewriter-effect` library load Client Side
// we have to laxzy load it
// https://www.gatsbyjs.com/docs/using-client-side-only-packages/

const TypeWriter = () => {
  const isSSR = typeof window === 'undefined';
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<>Software Engineer</>}>
          <TypeWriterLoadedClientSideOnlyLazy
            textStyle={{
              color: 'inherit',
              fontSize: 'inherit',
            }}
            cursorColor="white"
            multiText={[
              'Software Engineer',
              'Software Developer',
              'OpenSource',
              'Qualified Gate',
            ]}
            startDelay={2000}
            multiTextDelay={1000}
            typeSpeed={30}
            multiTextLoop={true}
          />
        </React.Suspense>
      )}
    </>
  );
};

export default TypeWriter;
