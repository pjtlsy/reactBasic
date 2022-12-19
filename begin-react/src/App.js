import React, { useRef, useState } from 'react';
// import Counter from './Counter';
// import Hello from './Hello';
// import Input from './input';
import UserList from './UserList';
// import Wrapper from './Wrapper';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4); // useRef 파라미터 값은 .current 기본값
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    // setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
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
