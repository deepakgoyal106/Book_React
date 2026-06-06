import "./style.css"
import Book from "./Book";
import {Books} from "../utils/mockData.js"
import { useState } from "react";

function BookList(){
    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(Books);
  //search book
    function handleSearch(){
        setFilteredBooks(Books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()))); 
    }  
        return(<>
            <div className="search">
                <h2>Search Books</h2>
                <div>
                    <input type="text" name="" id="" className="search-input" onChange={(e)=>setSearchText(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="bookList">
                {filteredBooks.map((data) => <Book key={data.id} bookDetails={data}/>)}
               
            </div>
            </>
                )
    }
export default BookList;