import React from 'react';

function SimpleList() {
  //   const fruits = ['apple', 'banana', 'cherry', 'orange', 'mango'];

  const fruits = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'cherry' },
    { id: 4, name: 'orange' },
    { id: 5, name: 'mango' },
  ];

  return (
    <div>
      <h2>내가 좋아하는 과일</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleList;