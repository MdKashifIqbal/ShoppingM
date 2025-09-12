import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "./slice/productDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const {details, loading, error} = useSelector((state) => state.productDetails);
 
  const navigate = useNavigate()
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(fetchProductDetails({ id }));
  }, []);
  
  useEffect(()=>{
    if(details){
       console.log(details)
    }
  },[details])

  if(error) return <h1>Error......</h1>
  if(loading) return <h1>Loading.......</h1>



  return (
  <>
    {/* Products Details {id} */}
    <div>
        <button onClick={()=>navigate("/")}>MENU</button>
    </div>
    <div className="Product-details-container">
        <div>
            <img src={details.images[0]} alt="" />
        </div>
        <div>
            <h3>{details.brand}</h3>
            <h3>{details.title}</h3>
            <div><span>{details.rating}</span></div>
            <p>{details.description}</p>
            <div>
                <h4>${details.price}</h4>
            </div>
        </div>
    </div>
  </>);
};

export default ProductDetails;
