import React from 'react';
import styled from 'styled-components';
import Map from './map';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
    <map
      containerElement={<div style={{ height: '400px', width: '600px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  </AppWrapper>
  );
}

export default App;
