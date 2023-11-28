import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className='centered-container'>
      <div className='centered-div'>
        <img src='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' alt='profile' className='profile-image'/>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              class="block w-full mt-4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              class="block w-full mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <Button variant="primary" type="submit" className='mt-3'>Login</Button>
        </form>
      </div>
      
    </div>
  );
}

export default LogIn