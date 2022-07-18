import React from "react";
import SearchedItem from "./SearchedItem";

function SearchedItemList({ searchedItems }) {
  return (
    <>
      {searchedItems[0] && <p>Search results: </p>}
      <div class="flex flex-wrap py-2 justify-around gap-y-2">
        {searchedItems[0] &&
          searchedItems.map((item) => (
            <SearchedItem key={item.id} item={item} />
          ))}
      </div>
    </>
  );
}

export default SearchedItemList;
