import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import media from './media-query';

import SignupForm from './components/SignupForm';

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

  ${props => props.pink ? css`
    background-color: white;
    color: #1BAFEB;
  ` : css`
    background: #1BAFEB;  /* fallback for old browsers */
    ${media.tablet`
      background: -webkit-linear-gradient(to right, #1BAFEB, #008ED9);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #1BAFEB, #008ED9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    `}

    color: black;
  `}

  ${props => props.center && css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

class App extends Component {
  render() {
    return (
      <Container>
        <Section pink>
          <Headline>Support unicef</Headline>
        </Section>
        <Section center>
          <SignupForm/>
        </Section>
      </Container>
    );
  }
}

export default App;
