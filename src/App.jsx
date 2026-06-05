import BookList from "./components/BookList";
import {Books} from "./utils/mockData";
import "./components/style.css"
import { useState } from "react";
import { use } from "react";
import Header from "./components/Header";

function App(){
  const [searchText, setSearchText] = useState(Books);
  const [filteredBooks, setFilteredBooks] = useState(Books);
  //search book
  function handleSearch(){
   setFilteredBooks(Books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()))); 
  }  
  return <>
  <Header/>
  <div className="search">
    <h2>Search Books</h2>
    <div>
      <input type="text" name="" id="" className="search-input" onChange={(e)=>setSearchText(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  </div>
  <BookList booksData={filteredBooks}/>
  </>
  
}
export default App;