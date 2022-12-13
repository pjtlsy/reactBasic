import React from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Input from './input';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
      <Counter />
      <Input />
    </Wrapper>
  );
}

export default App;
