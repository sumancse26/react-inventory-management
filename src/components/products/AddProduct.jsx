/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const CreateProductModal = ({ isOpen, onClose, onSave, currentProduct, categoryList }) => {
    const [productInfo, setProductInfo] = useState({
        category: '',
        name: '',
        price: '',
        unit: '',
        image: ''
    });

    useEffect(() => {
        if (currentProduct) {
            setProductInfo(currentProduct);
        }

        return () => {};
    }, [currentProduct]);

    const handleImageChange = (e) => {
        setProductInfo({ ...productInfo, image: e.target.files[0] });
    };
    const handleInputChange = (e) => {
        setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        onSave(productInfo);
    };

    return (
        <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                {/* Overlay */}
                <CSSTransition in={isOpen} timeout={300} classNames="overlay" unmountOnExit>
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50"></div>
                </CSSTransition>

                {/* Modal Content */}
                <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out z-10">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Create Product</h2>
                    <form onSubmit={handleSave}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                value={productInfo.category}
                                name="category"
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                                <option>Select Category</option>
                                {categoryList.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                value={productInfo.name}
                                name="name"
                                onChange={handleInputChange}
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Price
                            </label>
                            <input
                                type="text"
                                value={productInfo.price}
                                name="price"
                                onChange={handleInputChange}
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Unit
                            </label>
                            <input
                                type="text"
                                value={productInfo.unit}
                                name="unit"
                                onChange={handleInputChange}
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Image
                            </label>
                            <div className="">
                                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                                    {productInfo.image ? (
                                        <img
                                            src={URL.createObjectURL(productInfo.image)}
                                            alt="Product"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) : (
                                        <svg
                                            className="w-8 h-8 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 4a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V4z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 4l7.879 7.879a3 3 0 004.242 0L21 4M3 10h4l2 2h2l2-2h4"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    className="mt-3 w-full text-gray-500 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 focus:ring-2 focus:ring-pink-300 focus:outline-none">
                                Close
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-none">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </CSSTransition>
    );
};

export default CreateProductModal;
