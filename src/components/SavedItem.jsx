import axios from "axios";
import React from "react";

function SavedItem({ item }) {

  let handleDelete = (item) => {
    console.log(item)
    console.log('item id: ', item.id)
    let url = 'http://127.0.0.1:8000/api/item-delete/' + item.id
    axios.delete(url)
      .then((response) => {
        console.log('response from delete: ', response)
      })
      .catch((error) => console.log("error: ", error));

  }

  return (
  
    <>
    { item &&
      <>
      <div >author: {item.author}</div>
      <div >title: {item.title}</div>
      <div >description: {item.description}</div>
      <div >weeks on list: {item.weeks_on_list}</div>
      <div >rank: {item.rank}</div>
      <div>publisher: {item.publisher}</div>
      <div>Amazon url: {item.amazon_product_url}</div>
      <br></br>
      <button onClick={() => {handleDelete(item)}}>Delete</button>
      </>
    }
    </>
    
  );
}

export default SavedItem;
