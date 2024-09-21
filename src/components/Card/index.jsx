import React from 'react';
import './index.css';
function Card(props) {
  const { user } = props;
  return (
    <div className="user-card">
      <h3>{user.id}</h3>
      <h3>{user.username}</h3>
      <h3>{user.age}</h3>
      <h3>{user.email}</h3>
      <h3>{user.nat}</h3>
      <h3>{user.deck}</h3>
      <button className='delEl'>Delete</button>
    </div>
  );
}
export default Card;