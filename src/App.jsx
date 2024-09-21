import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [nat, setNat] = useState('');
  const [dec, setDec] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleSave = (event) => {
    event.preventDefault();
    const user = {
      username,
      age,
      email,
      nat,
      deck: dec,
      id: Date.now(),
    };

    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setUsername('');
    setAge('');
    setEmail('');
    setNat('');
    setDec('');
  };

  return (
    <div className="container">
      <form className="form">
        <div className="Input">
          <label>Name</label>
          <input onChange={e => setUsername(e.target.value)} value={username} type="text" placeholder="Enter your name here....." />
        </div>
        <div className="Input">
          <label>Age</label>
          <input onChange={e => setAge(e.target.value)} value={age} type="number" placeholder="Enter your age here...." />
        </div>
        <div className="Input">
          <label>Email</label>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email here...." />
        </div>
        <div className="Input">
          <label>Nationality</label>
          <select onChange={e => setNat(e.target.value)} value={nat}>
            <option value="russian">Russian</option>
            <option value="uzbek">Uzbek</option>
            <option value="arab">Arab</option>
            <option value="qizg'iz">Qizg'iz</option>
            <option value="turk">Turk</option>
            <option value="xitoy">Xitoy</option>
            <option value="tojik">Tojik</option>
            <option value="english">English</option>
          </select>
        </div>
        <div className="Input">
          <label>Description</label>
          <textarea placeholder="Enter description..." onChange={e => setDec(e.target.value)} value={dec}></textarea>
        </div>
        <button className='handleSave' onClick={handleSave}>Save</button>
      </form>

      <div className="user-list">
        {users.map((user) => (
          <Card key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
