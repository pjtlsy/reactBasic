import React from 'react';

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  //   const users = [
  //     {
  //       id: 1,
  //       username: 'seolyu',
  //       email: 'seolyu@seolyu.com',
  //     },
  //     {
  //       id: 2,
  //       username: 'seolyu1',
  //       email: 'seolyu1@seolyu1.com',
  //     },
  //     {
  //       id: 3,
  //       username: 'seolyu2',
  //       email: 'seolyu2@seolyu2.com',
  //     },
  //   ];
  return (
    <div>
      {/* <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[2].email})</span>
      </div> */}
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
