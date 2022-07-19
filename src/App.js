// Routes is a new feature from react-router-dom version 6, replaces Switch in 5
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SavedItemsList from "./components/SavedItemsList";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import { useState, useEffect } from "react";
import SavedItem from "./components/SavedItem";
import SearchedItemList from "./components/SearchedItemList";
import SearchedItem  from './components/SearchedItem';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  
  const [items, setItems] = useState("");
  const [searchedItems, setSearchedItems] = useState([]); 

  const url = "http://127.0.0.1:8000/api/lists-items/";

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = () => {
    axios.get(url)
      .then((response) => {
        let allData = response.data;
        setItems(allData);
      })
      .catch((error) => console.log("error: ", error));
  };

  return (
    <Router>
      <div className="">
      <Header /> 
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className='bg-slate-300 min-h-screen px-8'>
            <div className=''>
              <SearchForm setSearchedItems={setSearchedItems}/>
              <br></br>
              <SearchedItem searchedItems={searchedItems}/> 
              <SearchedItemList searchedItems={searchedItems}/>
              <br></br>
            </div>
            </div>
          }
        ></Route>
        <Route 
          exact
          path='saved-items/'
          element={
            <div className="bg-slate-300 min-h-screen px-8">
              <SavedItemsList items={items} />
              <SavedItem items={items} />
            </div>
          }></Route>
        <Route  
        exact 
        path='about/'
        element={
          <div className="bg-slate-300 min-h-screen px-8">
          <About />
          </div>
        }></Route>
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
