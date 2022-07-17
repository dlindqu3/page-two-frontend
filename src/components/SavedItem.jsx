import React from "react";

function SavedItem({ item }) {
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
      </>
    }
    </>
    
  );
}

export default SavedItem;
