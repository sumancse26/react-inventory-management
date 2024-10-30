/* eslint-disable react/prop-types */
const AddCustomer = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 h-screen !m-0">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg max-w-md w-full mx-4 p-6 relative animate-fadeIn">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                    onClick={onClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6">
                        <path d="M18 6 6 18" />
                        <path d="M6 6 18 18" />
                    </svg>
                </button>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Add Customer
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Customer Name <span className="text-red-700">*</span>
                        </label>
                        <input
                            type="text"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-custom-pink focus:ring-1 focus:ring-custom-purple"
                            placeholder="Enter name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Customer Email<span className="text-red-700">*</span>
                        </label>
                        <input
                            type="email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-custom-pink focus:ring-1 focus:ring-custom-purple"
                            placeholder="Enter email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Customer Mobile <span className="text-red-700">*</span>
                        </label>
                        <input
                            type="tel"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-custom-pink focus:ring-1 focus:ring-custom-purple"
                            placeholder="Enter mobile number"
                        />
                    </div>
                    <div className="flex justify-center gap-3 mt-6">
                        <button
                            type="button"
                            className="py-2 px-4 bg-gray-200 text-red-700 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 dark:bg-neutral-600 dark:text-gray-300 dark:hover:bg-neutral-700 dark:focus:ring-neutral-400"
                            onClick={onClose}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-purple-600 text-white rounded-md btn-gradient">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCustomer;

