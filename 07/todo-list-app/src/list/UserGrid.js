import React from 'react';
import UserCard from './UserCard';

function UserGrid() {
  const users = [
    { id: 1, name: '둘리', age: 1000000000000 },
    { id: 2, name: '도우너', age: 20 },
    { id: 3, name: '또치', age: 20 },
    { id: 4, name: '희동이', age: 3 },
  ];

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserGrid;