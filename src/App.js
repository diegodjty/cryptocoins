import React from 'react';
import styled from '@emotion/styled'
import Form from './components/Form'

import logo from './cryptocoins.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2Fe;
    display: block;
  }

`;


function App() {
  return (
      <Container>
          <div>
              <Img 
                src={logo}
                alt="Crypto Coins"
              />
          </div>
          <div>
            <Heading>
              Real time CryptoCoins Price
            </Heading>
            <Form 
            
            />
          </div>
      </Container>
  );
}

export default App;
