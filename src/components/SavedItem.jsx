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
      <div className="max-w-sm rounded overflow-hidden shadow-lg  border-solid border-2 border-charcoal-600 bg-teal-500 place-items-center">
      <div >author: {item.author}</div>
      <div >title: {item.title}</div>
      <div >description: {item.description}</div>
      <div >weeks on list: {item.weeks_on_list}</div>
      <div >rank: {item.rank}</div>
      <br></br>
      <button className='bg-slate-300 hover:bg-red-400 text-charcoal-700 font-bold hover:text-white py-2 px-8 border border-red-500 hover:border-transparent rounded' onClick={() => {handleDelete(item)}}>Delete</button>
      </div>
    }
    </>
    
  );
}

export default SavedItem;
