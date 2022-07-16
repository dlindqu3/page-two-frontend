import React from 'react'


function SearchedItem({ item }) {
  return (
    <>
    { item &&
      <>
      <div >author: {item.author}</div>
      <div >title: {item.title}</div>
      <div >description: {item.description}</div>
      <div >weeks on list: {item.weeks_on_list}</div>
      <div >rank: {item.rank}</div>
      <br></br>
      </>
    }
    </>
  )
}

export default SearchedItem