import React from 'react';
import HeatMap from '@uiw/react-heat-map';
import styled from 'styled-components';
const darkColor = { 0: 'rgb(255 255 255 / 25%)', 8: '#7BC96F', 4: '#C6E48B', 12: '#239A3B', 32: '#ff7b00' };
const enableDark=false;

const Demo = ({githubContribSvg}) => {
  
  if (!githubContribSvg) {
    return <></>;
  }

  const values = Object.keys(githubContribSvg).reduce((acc, el) => [...acc, ...githubContribSvg[el]], []);
  const customValues = values.map(value => ({date: value.date, count: value.contribCount}));

  console.log(customValues);


  return (
    <div>
      <Wrapper>
      <ExampleWrapper>
        <HeatMap
          style={{
            backgroundColor: enableDark ? '#000' : '#fff',
            color: enableDark ? '#888' : '#000',
          }}
          panelColors={{
            0: '#ebedf0',
            2: '#9be9a8',
            4: '#40c463',
            10: '#30a14e',
            20: '#216e39',
            30: '#000',
          }}

          // .replace(/#ebedf0/g, '#222222')
          // .replace(/#9be9a8/g, '#4fffa7')
          // .replace(/#40c463/g, '#3DDC84')
          // .replace(/#30a14e/g, '#008D41')
          // .replace(/#216e39/g, '#00753b')
          // panelColors={enableDark ? darkColor : undefined}
          width={"auto"}
          rectSize={11}
          // legendCellSize={legendCellSize}
          weekLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
          monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          startDate={new Date(customValues[0].date)}
          endDate={undefined}
          value={customValues}
          rectProps={{
            rx: 0,
            // onClick: (e) => {
            //   setSelectDate((e.target).dataset.date);
            // },
          }}
          legendRender={(props) => <rect {...props} rx={0} />}
          rectRender={(props, data) => {
            // if (!data.count) return <rect {...props} />;
            return (
              // <Tooltip placement="top" content={`count: ${data.count || 0}`}>
                <rect {...props} />
              // </Tooltip>
            );
          }}
        />
      </ExampleWrapper>
      </Wrapper>
    </div>
  );
};

const ExampleWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(16 22 26 / 10%), 0 0 0 rgb(16 22 26 / 0%), 0 1px 1px rgb(16 22 26 / 20%);
  margin: 0 auto;
  margin-top: 70px;
  width: 663px;
  svg {
    border-radius: 5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Demo;
