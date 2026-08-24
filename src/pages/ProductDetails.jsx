import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchProductById } from "../features/products/productSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    selectedProduct,
    detailsLoading,
    detailsError,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (detailsLoading) {
    return <p>Loading product...</p>;
  }

  if (detailsError) {
    return <p>Error: {detailsError}</p>;
  }

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <img
        src={selectedProduct.image}
        alt={selectedProduct.title}
        width="250"
      />

      <h1>{selectedProduct.title}</h1>

      <p>{selectedProduct.description}</p>

      <p>${selectedProduct.price}</p>

      <p>
        Rating: {selectedProduct.rating?.rate}
      </p>
    </div>
  );
}

export default ProductDetails;