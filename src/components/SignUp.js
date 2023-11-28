import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button';
function SignUp() {


    const [user, setUser] =useState({
        fullname:"",
        phonenumber:"",
        email: "",
        username:"",
        password:""
    })
    const handleOnChange = (event)=> {
        setUser(
             {
                 ...user,
                 [event.target.name]: event.target.value
             }
        )
     }
 

    const[loading, setLoading]= useState(false);
    const[error, setError]= useState(null);
    const pass1Ref = useRef(null);
    const pass2Ref = useRef(null);
    const usernameRef= useRef(null);

    const handleSubmit = (event) => {
        
        event.preventDefault();
        // console.log(user)
        if (pass1Ref.current.value === pass2Ref.current.value) {
            setLoading(true);
            fetch("http://localhost:3000/users",{
            method: "POST",    
            headers:{
                "Content-Type":"application/json"
                },                    
            body: JSON.stringify(user)
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
            })
            .then(data=> {
            setLoading(false);
            })
            .catch(error => {
            setError(error);
            setLoading(false);
            });
            handleClear1();
            handleClear2();
            alert("Saved successifully")
        }
        else{
            alert("Please confirm your password");
        }
    }
   
    const handleClear1 = () => {
      setUser({
        fullname:"",
        phonenumber:"",
        email: "",
        username:"",
        password:""
      });
    };
    const handleClear2= ()=> {
      pass2Ref.current.value = "";
    }

    return (
        <div className="w-full h-full centered-container">
          <div className="w-1/2 centered-div">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
              alt="profile"
              className="profile-image"
            />
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  className="block w-full mt-4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Name"
                  type="text"
                  name="fullname" // add name attribute
                  value={user.fullname} // add value attribute
                  onChange={handleOnChange}
                />
              </label>
              <br />
    
              <label>
                <input
                  className="block w-full mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Phone Number"
                  type="text"
                  name="phonenumber" // add name attribute
                  value={user.phonenumber} // add value attribute
                  onChange={handleOnChange}
                />
              </label>
              <br />
              <label>
                <input
                  className="block w-full mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="example@mail.domain"
                  type="text"
                  name="email" // add name attribute
                  value={user.email} // add value attribute
                  onChange={handleOnChange}
                />
              </label>
              <br />
              <label>
                <input
                  className="block w-full mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Username"
                  type="text"
                  name="username" // add name attribute
                  value={user.username} // add value attribute
                  onChange={handleOnChange}
                  ref={usernameRef} // Add ref to the input
                />
              </label>
              <br />
              <label>
              <input
                className="block w-full mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                type="password"
                id='pass1'
                name="password" // add name attribute
                value={user.password} // add value attribute
                onChange={handleOnChange}
                ref={pass1Ref} // Add ref to the input
              />
              </label>
              <br />
              <label>
                <input
                  className="block w-full mt-3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Confirm Password"
                  id='pass2'
                  type="password"
                  ref={pass2Ref} // Add ref to the input
                />
              </label>
              <br />
    
              <Button variant="primary" type="submit" className="mt-3">
                {loading ? 'Loading...' : 'Sign Up'} {/* show loading spinner */}
              </Button>
            </form>
          </div>
        </div>
      );
    
}

export default SignUp