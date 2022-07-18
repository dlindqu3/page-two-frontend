import React from "react";
import SavedItem from "./SavedItem";

function SavedItemsList({ items }) {
  return (
    <>
      <div class="flex flex-wrap py-2 justify-around">
        {items && items.map((item) => <SavedItem key={item.id} item={item}/>)}
      </div>
    </>
  );
}

export default SavedItemsList;
