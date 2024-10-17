// import { Form } from "react-router-dom"
import React,{useState,useEffect} from "react";
import axios from 'axios'

// import Footer from "./Footer"
const Home=()=> {
    const [product,setProduct]=useState([])
    const [add,setAdd]=useState(false)
    const [currentProduct,setCurrentProduct]=useState(null)
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(response=>setProduct(response.data.products))
        .catch(error => console.log(error))
        
    },[])

    const view_p=(products)=>{
        setAdd(true);
        setCurrentProduct(products);
        console.log(add,currentProduct);  
    }

    return(
        <div className="container mt-3">
            <div className="row" id ="a1">
                {product.map(pro=>(
                  <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id}>
                    <div className="card" onClick={()=>view_p(pro)}>
                        <img  className="card-img-top img-fluid"src={pro.images} alt="product image" />
                        <div className="card-body">
                            <h4 className="card-title">{pro.title}</h4>
                            <h6 className="card-text">{pro.price}</h6>
                        </div>
                    </div>
                  </div>  
                ))}
            </div>
        </div>

    )
}
export default Home
