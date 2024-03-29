import React, { Component } from "react";
import styled, { css } from "styled-components";
import media from "./media-query";

import SignupForm from "./components/SignupForm";
import unicefImage from "./images/unicef-bg.jpg";

const Container = styled.div`
  max-width: 100%;
`;

const Headline = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 40px;
  ${media.tablet`font-size: 60px`}
  ${media.desktop`font-size: 80px`}
`;

const Section = styled.div`
  color: white;
  max-width: 100%;
  box-sizing: border-box;
  padding: 120px 20px;
  ${media.tablet`padding: 120px 80px`}
  ${media.desktop`padding: 160px 200px`}

  ${props =>
    props.white
      ? css`
          ${media.desktop`padding-bottom: 0px`}
          background-color: white;
          color: #008fff;
        `
      : css`
          background-color: #008fff;
          color: black;
        `}

  ${props =>
    props.center &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

const UnicefImage = styled.img`
  width: 100%;
  margin-bottom: -10px;
`;

const Footer = styled.footer`
  margin-top: 100px;
  color: white;
`;

const StyledAnchor  = styled.a`
  color: white;
  text-decoration: underline;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Section white>
          <Headline>Support unicef</Headline>
        </Section>
        <UnicefImage src={unicefImage} />

        <Section center>
          <SignupForm />
          <Footer>
            Created by <StyledAnchor href="https://dawsbot.com">Dawson Botsford</StyledAnchor> to provide inspiration for <StyledAnchor href="https://paris.bounties.network/bounty/2566">Bounty 2566</StyledAnchor>
          </Footer>
        </Section>
      </Container>
    );
  }
}

export default App;
