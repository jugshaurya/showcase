import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import { Flex } from '../css-in-js/shared';

const color_calendar_graph_day_bg = '#222222';
const color_calendar_graph_day_L1_bg = '#4fffa7';
const color_calendar_graph_day_L2_bg = '#3ddc84';
const color_calendar_graph_day_L3_bg = '#008d41';
const color_calendar_graph_day_L4_bg = '#00753b';

export const GithubActivitySection = styled.div`
  border-radius: 48px;
  border: 1px solid ${Styles.gray};
  align-self: flex-end;
  width: 70%;
  padding: 30px;

  @media ${Styles.device.laptopL} {
    width: 80%;
  }

  @media ${Styles.device.laptop} {
    width: 85%;
  }

  @media ${Styles.device.ipad} {
    width: 95%;
  }

  @media ${Styles.device.mobileL} {
    width: 100%;
    padding-bottom: 10px;
  }

  @media ${Styles.device.mobileM} {
  }

  @media ${Styles.device.mobileS} {
  }
`;

export const ScrollableSvg = styled.div`
  width: 80%;
  margin: 0 auto;
  direction: rtl;
  overflow-x: scroll;
  svg {
    background: ${Styles.black};
    font-size: 0.7em;
    text {
      fill: ${Styles.gray};
      font-size: 0.8em;
    }

    rect.ContributionCalendar-day {
      outline: 1px solid black;
      shape-rendering: geometricPrecision;
    }
    rect.ContributionCalendar-day[data-level='0'] {
      fill: ${color_calendar_graph_day_bg};
    }
    rect.ContributionCalendar-day[data-level='1'] {
      fill: ${color_calendar_graph_day_L1_bg};
    }
    rect.ContributionCalendar-day[data-level='2'] {
      fill: ${color_calendar_graph_day_L2_bg};
    }
    rect.ContributionCalendar-day[data-level='3'] {
      fill: ${color_calendar_graph_day_L3_bg};
    }
    rect.ContributionCalendar-day[data-level='4'] {
      fill: ${color_calendar_graph_day_L4_bg};
    }
  }

  @media ${Styles.device.mobileL} {
    width: 100%;
  }
`;

export const GithubActivities = styled(Flex)`
  @media ${Styles.device.mobileL} {
    flex-direction: column;
  }
`;

export const GithubActivity = styled.div`
  border-right: 1px solid ${Styles.gray};
  width: 50%;
  margin: 20px;
  @media ${Styles.device.mobileL} {
    width: 100%;
    border: none;
    border-top: 1px solid ${Styles.gray};
  }
`;

export const ActivityHeading = styled.div`
  margin: 10px 0;
  font-size: ${Styles.text_small};
  color: ${Styles.green};
  background: ${Styles.black};
`;

export const Activity = styled(Flex)`
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const GithubOrganization = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px dashed ${Styles.gray};
  font-size: ${Styles.text_xsmall};
  background: ${Styles.black};
`;

export const GithubRepo = styled.a`
  text-decoration: underline;
  font-size: ${Styles.text_xxsmall};
  color: ${Styles.blue};
  display: inline-block;
`;

export const GithubGraph = styled.div`
  width: 100%;
  margin: 0 auto;
  svg {
    margin-left: 40px;
    font-size: 0.8em;
    fill: ${Styles.gray};
    overflow: visible;
    text {
      font-size: 0.7em;
    }
    @media ${Styles.device.laptopL} {
      margin-left: 0;
    }
    @media ${Styles.device.mobileL} {
      margin-left: 0;
      display: none;
      border: none;
    }
  }
`;
