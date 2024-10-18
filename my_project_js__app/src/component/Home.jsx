// import { Form } from "react-router-dom"
// import React,{useState,useEffect} from "react";
// import axios from 'axios'

// import Footer from "./Footer"
// const Home=()=> {
//     const [product,setProduct]=useState([])
//     const [add,setAdd]=useState(false)
//     const [currentProduct,setCurrentProduct]=useState(null)
//     useEffect(()=>{
//         axios.get('https://dummyjson.com/products')
//         .then(response=>setProduct(response.data.products))
//         .catch(error => console.log(error))
        
//     },[])

//     const view_p=(products)=>{
//         setAdd(true);
//         setCurrentProduct(products);
//         console.log(add,currentProduct);  
//     }

//     return(
//         <div className="container mt-3">
//             <div className="row" id ="a1">
//                 {product.map(pro=>(
//                   <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id}>
//                     <div className="card" onClick={()=>view_p(pro)}>
//                         <img  className="card-img-top img-fluid"src={pro.images} alt="product image" />
//                         <div className="card-body">
//                             <h4 className="card-title">{pro.title}</h4>
//                             <h6 className="card-text">{pro.price}</h6>
//                         </div>
//                     </div>
//                   </div>  
//                 ))}
//             </div>
//         </div>

//     )
// }
// export default Home

import react_img1 from '../assets/img/react_img1.webp';
import react_img2 from "../assets/img/react_img2.webp";
import react_img3 from '../assets/img/react_img3.webp'
import Footer from "./Footer"
import React,{useState,useEffect} from "react";
import axios from 'axios'
const Home=()=>{
  const [Products,setProduct]=useState([])
  const [add,setAdd]=useState(false)
  const [currentProduct,setCurrentProduct]=useState(null)
  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(response=>setProduct(response.data.products))
    .catch(error=>console.log(error))
  },[])

  const view_p=(products)=>{
    setAdd(true);
    setCurrentProduct(products);
  }
    return(
        <>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={react_img1} alt="img1" className="d-block" style={{width:"100%"}} />
    </div>
    <div className="carousel-item">
      <img src={react_img2} alt="img2" className="d-block" style={{width:"100%"}}/>
    </div>
    <div className="carousel-item">
      <img src={react_img3} alt="img3" className="d-block" style={{width:"100%"}}/>
    </div>
  </div>
  

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

<div className="container mt-3">
  <div className="row" id="a1">
{Products.map(pro=>(
  <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id}>
<div className="card" onClick={()=>view_p(pro)}>
  <img className="card-img-top img-fluid" src={pro.images} alt="" />
<div className="card-body">
  <h4 className='card-little'>{pro.title}</h4>
  <h6 className='card-text'>${pro.price}</h6>
</div>
</div>
  </div>
))}
  </div>
    {add ?(
    <ViewProduct
    currentproduct={currentProduct}
    />
  ):console.log('view product ')}
</div>
        <Footer/>
        </>
    )
}
const ViewProduct=(currentproducts)=>{
  const[product,setProduct]=useState(currentproducts)
  document.getElementById("a1").style.display="none"
  document.getElementById("demo").style.display="none"
  return(
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6 d-flex justify-content-center">
          <img src={product.currentproduct.images} alt="" className='img-fluid col-lg-12 w-75'/>
        </div>
        <div className='desc col-lg-6'>
          <h2>{product.currentproduct.title}</h2>
          <p>{product.currentproduct.description}</p>
          <p>${product.currentproduct.price}</p>
          <h6>Rating:{product.currentproduct.rating}</h6>
          <div className='row'>
            <button className='btn btn-warning col-lg-10'>Add to cart</button>
            <button className='btn btn-success col-lg-10 mt-1'>Buy now</button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Home
