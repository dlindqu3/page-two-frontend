import axios from "axios";
import React from "react";
import { useState } from "react";

function SearchForm() {

  const [selectedQuery, setSelectedQuery] = useState('')
  // const [searchedItems, setSearchedItems] = useState(''); 

  const list_names = [
    "combined-print-and-e-book-fiction",
    "combined-print-and-e-book-nonfiction",
    "hardcover-fiction",
    "hardcover-nonfiction",
    "trade-fiction-paperback",
    "mass-market-paperback",
    "paperback-nonfiction"
  ]

  

  const apiCallWithQuery = (query) => {
    console.log('apiCall query: ', query)
    let url = 'http://127.0.0.1:8000/api/lists/' + query 
    axios.get(url)
    .then((response) => {
      let searchedItemsData = response.data;
      console.log('searchedItemsData: ', searchedItemsData)
    })
    .catch((error) => console.log("error: ", error));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('selectedQuery at form submit: ', selectedQuery)
    apiCallWithQuery(selectedQuery)
  }

  return (
    <>
      <div>Search Form</div>
      <br></br>
      {/* when a button is pressed inside a form, it fires an event on the overall form  */}
      <form onSubmit={handleSubmit}>
          <label>Category search query:</label>
          <br></br>
          <select
          value={selectedQuery}
          onChange={(e) =>{
            let currentQuery = e.target.value;  
            console.log('currentQuery: ', currentQuery)
            setSelectedQuery(currentQuery)
          }}
          >
          {list_names.map((name) =>(
            <option value={name} key={name}>{name}</option>
          ))}
          </select>
        <button>Submit</button>
      </form>
    </>
  );
}

export default SearchForm;
