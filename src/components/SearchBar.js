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
      <label>
        <input
          type="text"
          value={searchTerm}
          placeholder='Search...'
          className='block w-full mt-4 mb-4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <Button variant="primary" type="submit">Submit</Button>
    </form>
    </div>
  )
}

export default SearchBar