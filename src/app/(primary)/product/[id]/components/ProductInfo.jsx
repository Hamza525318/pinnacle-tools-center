const ProductInfo = ({ title, price, oldPrice, discount, description }) => {
  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold text-navy">{title}</h1>

      <div className="flex items-center mt-2">
        <span className="text-2xl font-semibold text-yellow-500">{price}</span>
        {oldPrice && (
          <span className="ml-2 text-gray-500 line-through text-lg">{oldPrice}</span>
        )}
        {discount > 0 && (
          <span className="ml-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  );
};

export default ProductInfo;