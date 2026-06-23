import "./style.css"
import Book from "./Book";
import {Books} from "../utils/mockData.js"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext.js";



function BookList(){
    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(Books);

  //search book
    function handleSearch(){
        setFilteredBooks(Books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()))); 
    }  
    const {setUserName} = useContext(userContext);
        return(<>
            <div className="search">
                <input type="text" onChange={(e)=>setUserName(e.target.value)} placeholder="Enter"></input>
                <h2>Search Books</h2>
                <div>
                    <input type="text" name="" id="" className="search-input" onChange={(e)=>setSearchText(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="bookList">
                {filteredBooks.map((book) => (
                    <Link to={`/book/${book.id}`}>
                    <Book key={book.id} bookDetails={book}/>
                    </Link>
                    ))
                }
               
            </div>
            </>
                )
    }
export default BookList;