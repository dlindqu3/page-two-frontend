import React from "react";
import { useState } from "react";

function SearchForm() {

  const [selectedQuery, setSelectedQuery] = useState('')

  const list_names = [
    "Combined Print and E-Book Fiction",
    "Combined Print and E-Book Nonfiction",
    "Hardcover Fiction",
    "Hardcover Nonfiction",
    "Trade Fiction Paperback",
    "Mass Market Paperback",
    "Paperback Nonfiction"
  ]

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSelectedQuery(currentQuery)
  }

  return (
    <>
      <div>Search Form</div>
      {/* when a button is pressed inside a form, it fires an event on the overall form  */}
      <form>
          <label>Category search query:</label>
          <select
          onChange={(e) =>{
            let currentQuery = e.target.value;  
          }}
          >
          {list_names.map((name) =>(
            <option value={name} key={name}>{name}</option>
          ))}
          </select>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
      <p>Your category search query: {selectedQuery}</p>
    </>
  );
}

export default SearchForm;
