import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import JSIcon from '../static/icons/js.svg';
import NodeIcon from '../static/icons/nodeicon.svg';
import ReactIcon from '../static/icons/reacticon.svg';
import ReduxIcon from '../static/icons/redux.svg';
import GraphqlIcon from '../static/icons/graphql.svg';
import GatsbyIcon from '../static/icons/Gatsby.svg';
import FigmaIcon from '../static/icons/figma.svg';
import Arrows from '../static/icons/arrows.svg';
import BoxPattern from '../static/patterns/box.svg';
import NavbarBack from '../static/patterns/navbarback.svg';
import '../styles/layout.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div id="shaurya-showcase">
        <img id="navbarback" src={NavbarBack} alt="navbar-background" />
        <img id="box-pattern" src={BoxPattern} alt="box-pattern" />
        <svg
          id="book-pattern"
          width="1011"
          height="1132"
          viewBox="0 0 1011 1132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g id="Group 1108">
              <g id="box3" filter="url(#filter0_d)">
                <rect
                  width="721.761"
                  height="542.772"
                  rx="16"
                  transform="matrix(-0.424486 0.905744 0.904895 0.424977 408.685 158.34)"
                  fill="#56B8FF"
                />
              </g>
              <g id="box2" filter="url(#filter1_d)">
                <rect
                  width="717.797"
                  height="554.498"
                  rx="16"
                  transform="matrix(-0.424486 0.905744 0.904895 0.424977 375.618 89.5308)"
                  fill="#E9FA66"
                />
              </g>
              <g id="box1" filter="url(#filter2_d)">
                <rect
                  width="712.4"
                  height="560.055"
                  rx="16"
                  transform="matrix(-0.424486 0.905744 0.904895 0.424977 347.454 22.8081)"
                  fill="black"
                />
              </g>
              <a
                id="github"
                href="https://github.com/jugshaurya"
                target="_blank"
              >
                <g>
                  <ellipse
                    id="Ellipse 23"
                    cx="809.273"
                    cy="277.124"
                    rx="22"
                    ry="22"
                    transform="rotate(13.2468 809.273 277.124)"
                    fill="#1F1D1D"
                  />
                  <path
                    id="Vector"
                    d="M794.648 274.192C793.119 280.847 796.059 287.458 801.345 290.785C802.026 291.055 802.423 290.71 802.519 290.294C802.591 289.982 802.829 288.943 803.116 287.695C798.873 287.682 798.636 284.557 798.636 284.557C798.337 282.623 797.526 281.994 797.526 281.994C796.432 280.75 797.842 281.082 797.842 281.082C799.227 281.518 799.699 283.163 799.699 283.163C800.482 285.759 802.74 285.633 803.641 285.407C803.957 284.495 804.527 283.861 805.001 283.644C801.875 282.47 798.738 280.416 800.051 274.696C800.433 273.033 801.348 271.823 802.493 270.996C802.488 270.557 802.342 268.878 803.626 266.988C803.626 266.988 804.93 266.857 807.295 269.496C808.575 269.469 809.831 269.545 811.04 269.83C812.248 270.114 813.509 270.63 814.545 271.203C817.819 269.891 818.931 270.591 818.931 270.591C819.259 272.861 818.398 274.302 818.125 274.567C818.792 275.82 819.086 277.314 818.704 278.978C817.39 284.697 813.656 285.243 810.362 284.797C810.77 285.331 811.059 286.386 810.724 287.842C810.27 289.817 809.888 291.481 809.769 292.001C809.673 292.417 809.88 292.904 810.609 292.966C816.903 292.365 822.321 287.722 823.849 281.066C825.76 272.747 820.743 264.551 812.688 262.654C804.656 260.654 796.558 265.872 794.648 274.192Z"
                    fill="white"
                  />
                </g>
              </a>

              <a
                id="twitter"
                href="https://twitter.com/jugshaurya"
                target="_blank"
              >
                <g>
                  <ellipse
                    id="Ellipse 23_2"
                    cx="867.798"
                    cy="402.306"
                    rx="19.2084"
                    ry="19.2084"
                    transform="rotate(22.3301 867.798 402.306)"
                    fill="black"
                  />
                  <path
                    id="Vector_2"
                    d="M879.586 397.644C878.777 397.869 877.946 397.95 877.105 397.883C878.073 397.469 878.937 396.649 879.505 395.572C878.6 395.952 877.647 396.164 876.686 396.167C876.184 395.039 875.286 394.202 874.137 393.931C871.931 393.412 869.623 395.192 868.984 397.906C868.894 398.291 868.842 398.673 868.824 399.053C865.553 398.064 863.069 395.411 861.799 391.973C861.282 392.619 860.887 393.424 860.675 394.322C860.274 396.028 860.624 397.696 861.488 398.834C860.839 398.655 860.276 398.284 859.822 397.794C859.818 397.808 859.813 397.83 859.808 397.851C859.247 400.236 860.157 402.547 861.877 403.428C861.516 403.463 861.149 403.443 860.785 403.358C860.527 403.297 860.284 403.202 860.053 403.09C860.103 405.158 861.243 406.93 862.98 407.384C861.303 408.378 859.395 408.761 857.522 408.32C857.199 408.244 856.888 408.147 856.586 408.026C858.029 409.834 859.938 411.144 862.193 411.675C869.541 413.405 875.326 406.859 876.856 400.359C876.906 400.146 876.95 399.933 876.992 399.721C877.938 399.218 878.818 398.51 879.586 397.644Z"
                    fill="url(#paint0_linear)"
                  />
                </g>
              </a>
              <a
                id="linkedin"
                href="https://www.linkedin.com/in/jugshaurya/"
                target="_blank"
              >
                <g>
                  <ellipse
                    id="Ellipse 23_3"
                    cx="843.671"
                    cy="338.949"
                    rx="22"
                    ry="22"
                    transform="rotate(13.2468 843.671 338.949)"
                    fill="#1F1D1D"
                  />
                  <g id="linkedin_2" clipPath="url(#clip0)">
                    <g id="Group">
                      <path
                        id="Vector_3"
                        d="M853.178 351.907L853.178 351.907L853.183 351.907L854.394 343.93C854.987 340.028 854.603 336.892 850.043 336.185C847.851 335.845 846.197 336.821 845.423 337.868L845.36 337.859L845.661 335.878L841.337 335.208L839.133 349.73L843.635 350.427L844.726 343.237C845.014 341.344 845.65 339.569 847.994 339.932C850.303 340.29 850.009 342.456 849.753 344.14L848.68 351.21L853.178 351.907Z"
                        fill="#0077B5"
                      />
                      <path
                        id="Vector_4"
                        d="M834.006 334.073L838.513 334.772L836.309 349.293L831.801 348.595L834.006 334.073Z"
                        fill="#0077B5"
                      />
                      <path
                        id="Vector_5"
                        d="M837.355 327.193C835.914 326.969 834.567 327.958 834.348 329.4C834.129 330.842 835.117 332.218 836.558 332.441C838 332.664 839.35 331.651 839.569 330.209C839.787 328.767 838.795 327.416 837.355 327.193V327.193Z"
                        fill="#0077B5"
                      />
                    </g>
                  </g>
                </g>
              </a>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="105.364"
              y="163.62"
              width="791.416"
              height="878.271"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2.21766" />
              <feGaussianBlur stdDeviation="1.10883" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d"
              x="73.9792"
              y="94.8108"
              width="800.345"
              height="879.664"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2.21766" />
              <feGaussianBlur stdDeviation="1.10883" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d"
              x="48.1058"
              y="28.0881"
              width="803.082"
              height="877.138"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2.21766" />
              <feGaussianBlur stdDeviation="1.10883" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear"
              x1="863.45"
              y1="392.208"
              x2="877.264"
              y2="409.951"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2AA4F4" />
              <stop offset="1" stopColor="#007AD9" />
            </linearGradient>
            <clipPath id="clip0">
              <rect
                width="22"
                height="22"
                fill="white"
                transform="matrix(0.988202 0.153159 -0.150079 0.988674 834.744 326.788)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* <Navbar/> */}
        <div className="container">
          {/* <main>{children}</main> */}
          <div className="homepage">
            <div className="Hero">
              <div className="who-am-i">
                <div className="hi">Hi, I'm</div>
                <div className="bar">bar</div>
                <div className="name">Shaurya Singhal</div>
                <div className="bar2">bar</div>
                <div className="description">Software Developer</div>
                <div className="logos">
                  <img src={JSIcon} alt="js" title="Javascript" />
                  <img id="node" src={NodeIcon} alt="node" title="Node" />
                  <img src={ReactIcon} alt="react" title="React" />
                  <img src={ReduxIcon} alt="redux" title="Redux" />
                  <img src={GraphqlIcon} alt="graphql" title="GraphQL" />
                  <img src={GatsbyIcon} alt="gatsby" title="Gatsby" />
                  <img src={FigmaIcon} alt="figma" title="Figma" />
                </div>
                <div className="bar3">bar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
