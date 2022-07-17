import React from 'react'
import SearchedItem from './SearchedItem'

function SearchedItemList({ searchedItems }) {
  return (
    <>
    <div>SearchedItemList</div>
    <div class="flex flex-wrap">
        {searchedItems && searchedItems.map((item) => <SearchedItem key={item.id} item={item} />)}
      </div>
    </>
  )
}

export default SearchedItemList