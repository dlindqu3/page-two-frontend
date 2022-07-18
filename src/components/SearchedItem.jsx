import React from 'react'
import axios from 'axios'; 

function SearchedItem({ item }) {

  const postNewItem = async (item) => {
    let trimmedItem = {author: item.author, title: item.title, description: item.description, weeks_on_list: item.weeks_on_list, rank: item.rank, publisher: item.publisher, amazon_product_url: item.amazon_product_url}

    // console.log('current item: ', item)
    console.log('trimmed item: ', trimmedItem)

  let url = 'http://127.0.0.1:8000/api/list-item-create/'

  await axios.post(url, trimmedItem)
    .then((response) => {
      console.log('response to post: ', response)
     })
      .catch((error) => console.log("error: ", error));

   }
    

  return (
    <>
    { item &&
      <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg  border-solid border-2 border-charcoal-600 bg-teal-500 place-items-center">
      <div className=''>
      <div >author: {item.author}</div>
      <div >title: {item.title}</div>
      <div >description: {item.description}</div>
      <div >weeks on list: {item.weeks_on_list}</div>
      <div >rank: {item.rank}</div>
      <br></br>
      <button onClick={() => {postNewItem(item)}} className='bg-slate-300 hover:bg-blue-500 text-charcoal-700 font-bold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded'>Add to db</button>
      </div>
      </div>
      </>
    }
    </>
  )
}

export default SearchedItem