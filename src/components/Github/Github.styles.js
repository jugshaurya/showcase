import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import { Flex } from '../css-in-js/shared';

export const GithubSection = styled.section`
  position: relative;
  margin-top: 200px;

  @media ${Styles.device.mobileL} {
    margin-top: 100px;
  }
  @media ${Styles.device.mobileS} {
    margin-top: 70px;
  }
`;

export const GithubActions = styled.div`
  display: Grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  margin: 120px auto;
  @media ${Styles.device.ipad} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${Styles.device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 80px auto;
  }
`;

export const GithubAction = styled(Flex)`
  /* border: 3px solid gray; */
  flex-direction: column;
  @media ${Styles.device.ipad} {
    &.stars {
      display: none;
    }
    &.pr {
      order: 1;
    }
    &.contributed {
      font-size: ${Styles.text_xxxsmall};
    }
  }
`;

export const GithubType = styled.div`
  border: 4px dashed ${Styles.gray};
  text-align: center;
  align-items: center;
  padding: 10px 20px;
  color: ${Styles.gray};
  margin: 10px 0;
  width: 100%;
  @media ${Styles.device.laptop} {
    &.text-small {
      font-size: ${Styles.text_xxsmall};
    }
  }
  @media ${Styles.device.mobileL} {
    font-size: ${Styles.text_xxsmall};
  }
`;

export const Counter = styled.div`
  text-align: center;
  font-weight: bold;
  line-height: ${Styles.text_large};
  font-size: ${Styles.text_xxlarge};
  color: ${Styles.twitterBlue};
  margin: 10px 0;

  @media ${Styles.device.mobileL} {
    order: -1;
  }
`;

export const GithubSvgSection = styled(Flex)`
  justify-content: flex-end;
`;

export const WakatimeStats = styled(Flex)`
  justify-content: flex-start;
`;

export const Figure = styled.figure`
  width: 70%;
  margin-top: 80px;
  border: 1px solid ${Styles.gray};
  border-radius: 50px;
  box-shadow: 5px 5px 10px ${Styles.background};
  padding: 30px;
  @media ${Styles.device.laptop} {
    width: 80%;
  }
  @media ${Styles.device.mobileL} {
    width: 100%;
    height: 100%;
    padding: 0 10px;
  }
`;

export const Embed = styled.embed`
  width: 100%;
  height: 523px;
  border-radius: 48px;

  @media ${Styles.device.mobileL} {
    height: 400px;
  }
`;
