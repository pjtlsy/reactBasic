import React from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Input from './input';
import UserList from './UserList';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
      <Counter />
      <Input />
      <UserList />
    </Wrapper>
  );
}

export default App;
