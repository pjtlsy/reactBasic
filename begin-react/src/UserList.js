import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
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
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
