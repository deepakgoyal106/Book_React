import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";


function BookDetails(){
    const params = useParams();
    const book = Books.filter(book => book.id == params.id)
    
    return(<div style={{padding:'20px',display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1>Book Details with {params.id}</h1><br></br>
            {book.map((bookss)=>{
                return(
            <div key={bookss.id} style={{padding:'20px',display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h3>{bookss.title}</h3>
            <img src={bookss.coverImage} alt="" width="200px" height="200px"></img>
             <p style={{padding:"30px"}}>{bookss.Description}</p>
             </div>
             )})}
        </div>
    )
}
export default BookDetails;