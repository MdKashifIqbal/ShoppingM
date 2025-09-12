import React, { useEffect, useState } from "react";
// import {useSelector} from "react-redux"
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  filterByCategory,
  searchByProductName,
  sortByprice,
} from "./slice/shoppingCardslice";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const {
    list: productList,
    loading,
    totalNumberOfButtons,
    limit
  } = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const [page_no, setPage_no] = useState(1);
  const navigate = useNavigate()




  useEffect(() => {
    dispatch(fetchProducts({ page_no, limit }));
  }, [page_no]);

  

  function handleSort(e) {
    // console.log(e.target.value)
    dispatch(sortByprice(e.target.value));
    // console.log("clicked")
  }
  function searchByTitle(title) {
    dispatch(searchByProductName(title));
  }


  return (
    <>
      <div className="filter-container">
        <div>
          <select
            onChange={(e) => {
              handleSort(e);
            }}
          >
            <option value="">sort</option>
            <option value="low-to-high">low-to-high</option>
            <option value="high-to-low">high-to-low</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => {
              searchByTitle(e.target.value);
            }}
            placeholder="search by name.........."
          />
        </div>
        <div>
          <select onChange={(e) => dispatch(filterByCategory(e.target.value))}>
            <option value="">Category</option>
            <option value="">All</option>
            <option value="beauty">Beauty</option>
            <option value="smartphones">Smart-Phones</option>
            <option value="laptops">Laptops</option>
            <option value="mobile-accessories">Mobile-Accessories</option>
          </select>
        </div>
      </div>
      <div className="container">
        {!loading ? (
          productList.map((item) => {
            return (
              <div onClick={()=>navigate(`/product/${item.id}`)} className="cards" key={item.id}>
                <img src={item.thumbnail} alt="" />
                <p>{item.title}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
              </div>
            );
          })
        ) : (
          <h2>Loading........</h2>
        )}
      </div>
      <div className="button-container">
        {
         Array.from({length:totalNumberOfButtons},(_,i)=>(
          <button className={page_no==i+1?"active":""} onClick={()=>setPage_no(i+1)} key={i}>{i+1}</button>
         ))
        }
        </div>
    </>
  );
};

export default Cards;
