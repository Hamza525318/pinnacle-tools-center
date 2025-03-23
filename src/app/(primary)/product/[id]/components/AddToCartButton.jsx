const AddToCartButton = ({ price, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="mt-6 w-full bg-p-yellow text-p-blue py-3 text-lg font-semibold rounded hover:bg-yellow-500 transition"
      >
        Add to cart - INR {price}
      </button>
    );
  };
  
  export default AddToCartButton;
  