import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Table from './components/Table';
import Employees from './components/Employees';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Table>
          <Employees></Employees>
        </Table>

      </Wrapper>
    </>
  );
}

export default App;