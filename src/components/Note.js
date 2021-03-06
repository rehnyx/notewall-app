import React from 'react';

export default function Note(p) {
  function handleClick() {
    p.onDelete(p.id);
  }

  return (
    <div className='note'>
      <h1>{p.title}</h1>
      <p>{p.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}
