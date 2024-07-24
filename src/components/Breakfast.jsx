import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Nav from '../components/Nav';

function Breakfast() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', image: null });
  const [productImage, setProductImage] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleButtonClick = (route) => {
    navigate(route);
  };

  const handleAddProductClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result);
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setIsPopupOpen(false);
    setNewProduct({ name: '', description: '', price: '', image: null });
    console.log(products);
    setProductImage(null);
  };

  const handleRemoveProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const location = useLocation();

  return (
    <div>
      <Nav />
      <div className="flex">
        {/* Sidebar */}
        <div className={`bg-orange-50 h-screen w-60 flex flex-col items-center justify-center transition-transform ease-in-out duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center py-11 bg-amber-100 shadow-sm flex-grow">
          <div className="text-2xl font-bold text-center text-black mb-5">Breakfast Choices</div>
          <div className="ml-4">
            <button
              className={`px-2 py-2 text-2xl rounded-xl shadow-sm mb-4 custom-button ${location.pathname === "/breakfast" ? 'bg-red-500' : 'bg-orange-200'}`}
              onClick={() => {
                toggleSidebar();
                navigate("/breakfast");
              }}
            >
              Breakfast
            </button>
            <button className="bg-orange-200 px-4 py-2 rounded mb-2 ml-8" onClick={() => handleButtonClick("/lunch")}>
              Lunch
            </button>
            <button className="bg-orange-200 px-4 py-2 rounded mb-2 ml-8" onClick={() => handleButtonClick("/snacks")}>
              Snacks
            </button>
            <button className="bg-orange-200 px-4 py-2 rounded mb-2 ml-8" onClick={() => handleButtonClick("/dinner")}>
              Dinner
            </button>
          </div>
          <div className="flex gap-3 mb-5">
            {/* Menu Button */}
            <div className="flex flex-col justify-start -ml-20">
              <button className="bg-orange-200 ml-40 py-2 rounded mb-2" onClick={handleAddProductClick}>
                Add new product
              </button>
              {products.map((product, index) => (
                <img key={index} src={product.image} alt={product.name} className="ml-40" style={{ width: '150px', height: '150px', marginTop: index > 0 ? '10px' : '0' }} />
              ))}
            </div>
            <section>
              <div className="grid grid-cols-4 gap-1 md:grid-cols-8 lg:grid-cols-18">
                <div className="col-span-2 bg-orange-200 px-4 py-2 rounded mb-2 ml-6">Product</div>
                <div className="col-span-2 bg-orange-200 px-4 py-2 rounded mb-2 ml-6">Product Description</div>
                <div className="col-span-2 bg-orange-200 px-4 py-2 rounded mb-2 ml-6">Price</div>
                <div className="col-span-2 bg-orange-200 px-4 py-2 rounded mb-2 ml-6">Actions</div>
              </div>
              {products.map((product, index) => (
                <div key={index} className="grid grid-cols-4 gap-1 md:grid-cols-8 lg:grid-cols-18">
                  <div className="col-span-2 px-14 py-12 rounded mb-2 ml-8">
                  {product.name}
                  </div>
                  <div className="col-span-2 px-4 py-12 rounded mb-2 ml-6">{product.description}</div>
                  <div className="col-span-2 px-4 py-9 rounded mb-2 ml-6 text-2xl">{product.price}</div>
                  <div className="col-span-2 px-4 py-9 rounded mb-2 ml-6 text-2xl">
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleRemoveProduct(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Product Name</label>
                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Product Description</label>
                <textarea name="description" value={newProduct.description} onChange={handleInputChange} className="w-full px-3 py-2 border rounded"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Price</label>
                <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Product Image</label>
                <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
                {productImage && <img src={productImage} alt="Product Preview" className="h-24 w-24 mb-4" />}
              </div>
              <div className="flex justify-end">
                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={handleClosePopup}>
                  Cancel
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Breakfast;
