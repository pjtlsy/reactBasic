import React, { useRef } from 'react';
// import Counter from './Counter';
// import Hello from './Hello';
// import Input from './input';
import UserList from './UserList';
// import Wrapper from './Wrapper';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  const nextId = useRef(4); // useRef 파라미터 값은 .current 기본값
  const onCreate = () => {
    // 나중에 구현할 배열에 항목 추가 로직
    nextId.current += 1;
  };

  return <UserList users={users} />;
  // return (
  // <Wrapper>
  //   <Hello name="react" color="red" isSpecial={true} />
  //   <Hello color="pink" />
  //   <Counter />
  //   <Input />
  //   <UserList />
  // </Wrapper>
  // );
}

export default App;
