import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "./useProduct";
import { fetchProductDetails } from "./slice/productDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const {details, loading} = useSelector((state) => state.productDetails);
 
  const navigate = useNavigate()
  const dispatch = useDispatch() 


  const {data, isLoading, error} = useProduct({id})

  useEffect(()=>{
    if(!isLoading){
      dispatch(fetchProductDetails(data))
      // console.log(data)
    }
  },[data])

  if(error) return <h1>Error......</h1>
  if(loading) return <h1>Loading.......</h1>



  return (
  <>
    {/* Products Details {id} */}

    <div>
        <button className="menu-btn" onClick={()=>navigate("/")}> MENU</button>
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
