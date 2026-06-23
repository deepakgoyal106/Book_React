import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";
import {useDispatch} from 'react-redux';
import {addItem, removeItem, clearCart} from "../utils/cartSlice";


function BookDetails(){
    const params = useParams();
    const book = Books.filter(book => book.id == params.id)
    const dispatch = useDispatch();

    function handleAddBook(item){
         dispatch(addItem(item))
    }

    function handleRemoveBook(){
        dispatch(removeItem())
    }

    function handleClearBook(){
        dispatch(clearCart());
    }
    return(<div style={{padding:'20px',display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Book Details with {params.id}</h1><br></br>
            {book.map((bookss)=>{
                return(
            <div key={bookss.id} style={{padding:'20px',display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h3>{bookss.title}</h3>
           
            <img src={bookss.coverImage} alt="" width="200px" height="200px"></img>
             <p style={{padding:"30px"}}>{bookss.Description}</p>
              <button onClick={()=>handleAddBook(book)}>Add To Cart</button>
              <button onClick={handleRemoveBook}>Remove From Cart</button>
               <button onClick={handleClearBook}>Clear Cart</button>
             </div>
             )})}
        </div>
    )
}
export default BookDetails;