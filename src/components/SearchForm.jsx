import axios from "axios";
import React from "react";
import { useState } from "react";

function SearchForm({ setSearchedItems }) {

  const [selectedQuery, setSelectedQuery] = useState('')

  const apiCallWithQuery = (query) => {
    console.log('apiCall query: ', query)
    let url = 'http://127.0.0.1:8000/api/lists/' + query 
    axios.get(url)
    .then((response) => {
      let searchedItemsData = response.data;
      console.log('searchedItemsData: ', searchedItemsData)
      setSearchedItems(searchedItemsData)
    })
    .catch((error) => console.log("error: ", error));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedQuery === 'Select'){
      alert('Please choose a valid option')
    }
    apiCallWithQuery(selectedQuery)
  }

  return (
    <div className="py-6">
      <br></br>
      {/* when a button is pressed inside a form, it fires an event on the overall form  */}
      <form onSubmit={handleSubmit}>
          <label className="py-3">Please enter a category search query:</label>
          <br></br>
          <select
          value={selectedQuery}
          onChange={(e) =>{
            let currentQuery = e.target.value;  
            console.log('currentQuery: ', currentQuery)
            setSelectedQuery(currentQuery)
          }}
          >
          <option selected='true'>Select</option>
          <option value="combined-print-and-e-book-fiction">Combined print and ebook fiction</option>
          <option value="combined-print-and-e-book-nonfiction">Combined print and ebook nonfiction</option>
          <option value="hardcover-fiction">Hardcover fiction</option>
          <option value="hardcover-nonfiction">Hardcover nonfiction</option>
          <option value="trade-fiction-paperback">Trade fiction paperback</option>
          <option value="mass-market-paperback">Mass market paperback</option>
          <option value="paperback-nonfiction">Paperback nonfiction</option>

          </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
