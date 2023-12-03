import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


function SearchBar({searchFunc}) {
   const [searchTerm, setSearchTerm] = useState("")

   const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call the form function passed from the parent with the search term
    searchFunc(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className='place-content-center'>
          <label className='mb-3'>
            <input
              type="text"
              value={searchTerm}
              placeholder='Search...'
              className='mt-1 mb-1 border-solid	border-1 border-gray-950'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="primary" type="submit">Search</Button>
          </label>
      
      </div>
    </form>
    </div>
  )
}

export default SearchBar