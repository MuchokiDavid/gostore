import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';


function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[loading, setLoading]= useState(true)
  const[error, setError]= useState(null) 
  const[users, setUsers]= useState([])
  const passRef = useRef(null);
  const usernameRef= useRef(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // console.log(users);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(String(users.username)===String(username)&& String(users.password)===String(password)){
      console.log(`Username: ${username}, Password: ${password}`);
      handleClear()
    }else{
      alert("Invalid Credentials")
      handleClear()
    }
  };

  const handleClear = ()=> {
    passRef.current.value = "";
    usernameRef.current.value= "";
  }

  return (
    <div className='centered-container'>
      <div className='centered-div'>
        <img src='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' alt='profile' className='profile-image'/>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="block w-full mt-4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              ref= {usernameRef}
            />
          </label>
          <br />
          <label>
            <input
              className="block w-full mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              ref= {passRef}
            />
          </label>
          <br />
          <Button variant="primary" type="submit" className='mt-3 mb-3'>Login</Button>
        </form>
      </div>
      
    </div>
  );
}

export default LogIn