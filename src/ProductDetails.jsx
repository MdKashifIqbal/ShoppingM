import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "./custom-hook/useProduct";
import { fetchProductDetails } from "./slice/productDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const { details, loading } = useSelector((state) => state.productDetails);
  const [mainImage, setMainImage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isLoading, error } = useProduct({ id });

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchProductDetails(data));
      console.log(data.images[0]);
      setMainImage(data.images[0]);
      // console.log(data)
    }
  }, [data]);

  if (error) return <h1>Error......</h1>;
  if (loading) return <h1>Loading.......</h1>;

  return (
    <>
      {/* Products Details {id} */}

      <div>
        <button className="menu-btn" onClick={() => navigate("/")}>
          {" "}
          MENU
        </button>
      </div>
      <div className="Product-details-container">
        <div className="sidebar-image-conatiner">
          {details.images.map((image, i) => {
            return (
              <img
                onClick={() => setMainImage(image)}
                key={i}
                className={`${
                  image == mainImage ? "active-img" : ""
                } sidebar-image`}
                src={image}
                alt=""
              />
            );
          })}
        </div>
        <div>
          <div>
            <img className="main-img" src={mainImage} alt="" />
          </div>
          <div>
            <h3>{details.brand}</h3>
            <h3>{details.title}</h3>
            <div>
              <span>{details.rating}</span>
            </div>
            <p>{details.description}</p>
            <div>
              <h4>${details.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
