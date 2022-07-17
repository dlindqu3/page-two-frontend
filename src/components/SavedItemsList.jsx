import React from "react";
import SavedItem from "./SavedItem";

function SavedItemsList({ items }) {
  return (
    <>
      <div class="flex flex-wrap">
        {items && items.map((item) => <SavedItem key={item.id} item={item} />)}
      </div>
    </>
  );
}

export default SavedItemsList;
