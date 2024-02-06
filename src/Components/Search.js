import React from 'react'

const Search = ({search, inputEvent}) => {
  return (
    <input type="text" id='search' name='search' placeholder='Search for City' className='search' value={search} onChange={inputEvent} autoComplete='off' />
  )
}

export default Search
