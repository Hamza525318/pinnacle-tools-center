import { useState } from "react";

const QuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center mt-4">
      <button
        onClick={handleDecrease}
        className="bg-gray-200 px-3 py-2 rounded-l text-navy font-bold hover:bg-gray-300"
      >
        -
      </button>
      <span className="px-4 py-2 bg-white border">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="bg-gray-200 px-3 py-2 rounded-r text-navy font-bold hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
