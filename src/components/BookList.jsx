import "./style.css"
import Book from "./Book";

function BookList(props){
    return(<div className="bookList">
        {props.booksData.map((data) => <Book key={data.id} bookDetails={data}/>)}
    </div>)
}
export default BookList;