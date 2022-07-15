// Routes is a new feature from react-router-dom version 6, replaces Switch in 5
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SavedItemsList from "./components/SavedItemsList";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import { useState, useEffect } from "react";
import SavedItem from "./components/SavedItem";

function App() {
  
  const [items, setItems] = useState("");

  const url = "http://127.0.0.1:8000/api/lists-items/";

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = () => {
    axios
      .get(url)
      .then((response) => {
        let allData = response.data;
        setItems(allData);
      })
      .catch((error) => console.log("error: ", error));
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <SearchForm />
              <SavedItemsList items={items} />
              <SavedItem items={items} />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
