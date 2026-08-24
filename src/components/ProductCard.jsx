function ProductCard({ product }) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        width="150"
      />

      <h3>{product.title}</h3>

      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;