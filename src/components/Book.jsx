import { useContext } from "react";
import userContext from "../utils/userContext";


function Book(props){
    const data = useContext(userContext)
    return(<>
    <div className="book-card">
         <img src={props.bookDetails.coverImage} alt="" width="200px" height="200px" className="book-cover"/>
         <div className="book-details">
            <h2 className="book-title">{props.bookDetails.title}</h2>
            <p className="book-author">{props.bookDetails.author}</p>
            <p className="book-title u">{data.loggedInUser}</p>
            <p className="book-description">{props.bookDetails.Description}</p>
            
        </div>
    </div>
    </>)
}
export default Book;