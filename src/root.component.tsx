/** @format */

import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { MadieEditor } from "@madie/madie-editor";
import { tsVoidKeyword } from "@babel/types";
import tw, { css, styled, theme } from "twin.macro";
import {
  Nav,
  InnerNav,
  InnerMost,
  DropDown,
  Logo,
  NavButton,
  DropMenu,
  ListItem,
  InnerItem,
  ExtraButton,
  Bars,
  Bar,
} from "./styles/styles";

const Image = styled.svg`
  height: 2rem;
`;

export default function Root(props) {
  const [editorVal, setEditorVal] = useState("");
  const handleMadieEditorValue = (val) => {
    setEditorVal(val);
  };

  const outputProps = {
    props: {
      handleValueChanges: (val) => handleMadieEditorValue(val),
    },
  };

  return (
    <>
      <GlobalStyles />
      <MadieEditor {...outputProps} />
      <div data-testid="madie-editor-value">{editorVal}</div>
      <Nav>
        <InnerNav>
          <InnerMost>
            <Logo href="/">
              <Image>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64.0196 22H59.8018L68.1816 2.33521H72.0364L80.4163 22H76.1425L74.2152 17.4749H65.947L64.0196 22ZM70.0811 7.36314L67.204 14.1508H72.9302L70.0811 7.36314ZM43.0223 22H39V2.44694H42.9944L48.6648 10.5475L54.3352 2.44694H58.3017V22H54.3352V8.62012L48.6648 16.1605L43.0223 8.62012V22ZM81.8836 22H89.2021C92.3864 22 94.9655 21.0968 96.9395 19.2905C98.932 17.4656 99.9283 15.1099 99.9283 12.2235C99.9283 9.35569 98.932 7.00932 96.9395 5.18437C94.9469 3.35941 92.3678 2.44694 89.2021 2.44694H81.8836V22ZM85.906 18.3967V6.05029H88.8669C91.0456 6.05029 92.7402 6.59964 93.9507 7.69833C95.1797 8.77841 95.7942 10.2868 95.7942 12.2235C95.7942 14.1602 95.1797 15.6778 93.9507 16.7765C92.7402 17.8566 91.0456 18.3967 88.8669 18.3967H85.906ZM106.363 22H102.425V9.16269C102.99 9.44446 103.638 9.58535 104.371 9.58535C105.135 9.58535 105.799 9.43192 106.363 9.12505V22ZM109.519 22H124.183V18.3967H113.541V13.3687H121.865V9.82124H113.541V6.05029H123.876V2.44694H109.519V22Z"
                  fill="#F2F5FB"
                />
                <path
                  d="M102.714 2.69832C102.267 3.14525 102.043 3.70391 102.043 4.3743C102.043 5.02607 102.267 5.58473 102.714 6.05028C103.179 6.4972 103.738 6.72067 104.39 6.72067C105.041 6.72067 105.591 6.4972 106.038 6.05028C106.503 5.58473 106.736 5.02607 106.736 4.3743C106.736 3.70391 106.503 3.14525 106.038 2.69832C105.591 2.23277 105.041 2 104.39 2C103.738 2 103.179 2.23277 102.714 2.69832Z"
                  fill="white"
                />
                <path
                  d="M28.0772 7.14717C29.1392 5.79076 28.8879 3.84001 27.516 2.79004C26.1442 1.74007 24.1712 1.98849 23.1092 3.34489L12.5337 16.8529C11.4718 18.2093 11.7231 20.16 13.0949 21.21C14.4668 22.26 16.4398 22.0115 17.5017 20.6551L28.0772 7.14717Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M1.92278 7.14717C0.860843 5.79076 1.11209 3.84001 2.48397 2.79004C3.85584 1.74007 5.82883 1.98849 6.89078 3.34489L17.4663 16.8529C18.5282 18.2093 18.2769 20.16 16.9051 21.21C15.5332 22.26 13.5602 22.0115 12.4983 20.6551L1.92278 7.14717Z"
                  fill="url(#paint1_linear)"
                />
                <path
                  d="M1.17743 15.1239C1.17743 13.9606 2.6695 13.4598 3.38578 14.3826L8.01164 20.3425C8.63325 21.1434 8.05575 22.3013 7.03472 22.3013H2.40886C1.72876 22.3013 1.17743 21.7562 1.17743 21.0837V15.1239Z"
                  fill="#33C5BF"
                />
                <path
                  d="M28.8177 15.1239C28.8177 13.9606 27.3257 13.4598 26.6094 14.3826L21.9835 20.3425C21.3619 21.1434 21.9394 22.3013 22.9604 22.3013H27.5863C28.2664 22.3013 28.8177 21.7562 28.8177 21.0837V15.1239Z"
                  fill="#21409F"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="27.516"
                    y1="2.79002"
                    x2="13.2988"
                    y2="21.366"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3366FF" />
                    <stop offset="0.484375" stop-color="#2E5CE6" />
                    <stop offset="0.890625" stop-color="#11204B" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="2.48396"
                    y1="2.79002"
                    x2="16.7012"
                    y2="21.366"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3366FF" />
                    <stop offset="1" stop-color="#33CABB" />
                  </linearGradient>
                </defs>
              </Image>
            </Logo>
            <NavButton type="button">
              <Bars>
                <Bar />
                <Bar />
                <Bar />
              </Bars>
            </NavButton>
          </InnerMost>
          <DropDown>
            <DropMenu>
              <ListItem>
                <InnerItem href="#" aria-label="Release Notes">
                  Release Notes
                </InnerItem>
              </ListItem>
              <ListItem>
                <InnerItem href="#" aria-label="Measure">
                  Measure
                </InnerItem>
              </ListItem>
              <ListItem>
                <InnerItem href="#" aria-label="IDE">
                  IDE
                </InnerItem>
              </ListItem>

              <ExtraButton href="/login">Login</ExtraButton>
            </DropMenu>
          </DropDown>
        </InnerNav>
      </Nav>
    </>
  );
}
