import React, { useState } from 'react';
import Nav from '../components/Nav';

function Inventory() {
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Breakfast');

  const handleImageChange = (e) => {
    setProductImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleAddMenu = () => {
    const newMenuItem = {
      productName,
      productDescription,
      price,
      productImage,
      category,
    };

    const existingItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    existingItems.push(newMenuItem);
    localStorage.setItem('menuItems', JSON.stringify(existingItems));

    // Clear the form
    setProductImage(null);
    setProductName('');
    setProductDescription('');
    setPrice('');
    setCategory('Breakfast');
  };

  return (
    <div>
      <Nav />
      <div className="flex">
        <div className="bg-orange-50 h-screen w-60 flex flex-col items-center justify-center">
          <button className="px-12 py-7 text-2xl bg-orange-200 rounded-xl shadow-sm mb-4">Orders</button>
          <button className="px-12 py-7 text-2xl bg-orange-200 rounded-xl shadow-sm mb-4">Menu</button>
          <button className="px-14 pt-4 pb-2.5 text-2xl bg-orange-200 rounded-xl shadow-sm mb-4">Inventory</button>
          <button className="px-14 pt-4 pb-2.5 text-2xl bg-orange-200 rounded-xl shadow-sm mb-4">Order History</button>
        </div>

        <div className="flex-grow py-11 bg-amber-100 shadow-sm">
          <div className="text-2xl font-bold text-center text-black mb-5">Staff Inventory</div>
          <div className="flex justify-center items-center ">
            <div className="flex flex-col items-center border border-orange-600  p-6 rounded-lg bg-white">
              <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
              {productImage && <img src={productImage} alt="Product Preview" className="h-24 w-24 mb-4" />}
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="mb-4 p-2 border border-orange-600 rounded"
              />
              <textarea
                placeholder="Product Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="mb-4 p-2 border border-orange-600 rounded"
              ></textarea>
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mb-4 p-2 border border-orange-600 rounded"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mb-4 p-2 border border-orange-600 rounded"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snacks">Snacks</option>
                <option value="Dinner">Dinner</option>
              </select>
              <button onClick={handleAddMenu} className="px-4 py-2 bg-orange-600 text-white rounded">Add New Menu</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
