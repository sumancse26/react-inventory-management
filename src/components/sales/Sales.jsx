const Sales = () => {
    const calculateDiscount = (e) => {
        console.log(e.target.value);
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/3 px-2 mb-4 animate-fadeIn">
                    <div className="shadow-lg h-full bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h2 className="font-semibold text-gray-800">BILLED TO</h2>
                                <p className="text-sm my-1">
                                    Name: <span id="CName"></span>
                                </p>
                                <p className="text-sm my-1">
                                    Email: <span id="CEmail"></span>
                                </p>
                                <p className="text-sm my-1">
                                    User ID: <span id="CId"></span>
                                </p>
                            </div>
                            <div className="text-center">
                                <img className="w-16 mx-auto" src="{{ 'images/logo.png' }}" alt="Logo" />
                                <p className="font-semibold text-gray-800 mt-2">Invoice</p>
                                <p className="text-sm mt-1"></p>
                            </div>
                        </div>
                        <hr className="my-3 border-gray-300" />
                        <table className="table-auto w-full text-left mb-3">
                            <thead>
                                <tr className="text-xs font-semibold text-gray-600">
                                    <th className="px-2">Name</th>
                                    <th className="px-2">Qty</th>
                                    <th className="px-2">Total</th>
                                    <th className="px-2">Remove</th>
                                </tr>
                            </thead>
                            <tbody id="invoiceList"></tbody>
                        </table>
                        <hr className="my-3 border-gray-300" />
                        <div className="text-gray-800">
                            <div>
                                <label htmlFor="discountP" className="text-xs whitespace-nowrap text-gray-800">
                                    TOTAL (%):
                                </label>
                            </div>
                            <div>
                                <label htmlFor="discountP" className="text-xs whitespace-nowrap text-gray-800">
                                    PAYABLE (%):
                                </label>
                            </div>
                            <div>
                                <label htmlFor="discountP" className="text-xs whitespace-nowrap text-gray-800">
                                    VAT (%):
                                </label>
                            </div>
                            <div className="w-full mb-4 p-0.5 rounded-lg flex items-center space-x-2">
                                <label htmlFor="discountP" className="text-xs whitespace-nowrap text-gray-800">
                                    Discount (%):
                                </label>
                                <input
                                    type="number"
                                    id="discountP"
                                    value="0"
                                    min="0"
                                    step="1"
                                    className="w-full bg-white rounded-lg px-2 py-1 text-sm focus:outline-none
                                        focus:ring-2  focus:ring-purple-600
                                        focus:border-transparent focus:ring-offset-0 transition-all"
                                    onChange={calculateDiscount}
                                />
                            </div>

                            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold transform transition duration-300 hover:scale-105 hover:bg-purple-700">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-2 mb-4 animate-fadeIn">
                    <div className="shadow-lg h-full bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <label className="font-semibold text-gray-800 text-sm">
                                    Search:
                                    <input
                                        type="text"
                                        className="w-full bg-white rounded-lg px-2 py-1 text-sm focus:outline-none
                                        focus:ring-2  focus:ring-purple-600
                                        focus:border-transparent focus:ring-offset-0 transition-all"
                                    />
                                </label>
                            </div>
                        </div>
                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr className="text-xs font-semibold text-gray-600">
                                    <th className="px-2">Product</th>
                                    <th className="px-2">Pick</th>
                                </tr>
                            </thead>
                            <tbody id="productList">
                                <tr>
                                    <td colSpan="2" className="text-center text-gray-500 py-4">
                                        No data available in table
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-between mt-4 text-sm text-gray-500">
                            <span>Previous</span>
                            <span>Next</span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 px-2 mb-4 animate-fadeIn">
                    <div className="shadow-lg h-full bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <label className="font-semibold text-gray-800 text-sm">
                                Search:
                                <input
                                    type="text"
                                    className="w-full bg-white rounded-lg px-2 py-1 text-sm focus:outline-none
                                        focus:ring-2  focus:ring-purple-600
                                        focus:border-transparent focus:ring-offset-0 transition-all"
                                />
                            </label>
                        </div>
                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr className="text-xs font-semibold text-gray-600">
                                    <th className="px-2">Customer</th>
                                    <th className="px-2">Pick</th>
                                </tr>
                            </thead>
                            <tbody id="customerList">
                                <tr>
                                    <td colSpan="2" className="text-center text-gray-500 py-4">
                                        No data available in table
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-between mt-4 text-sm text-gray-500">
                            <span>Previous</span>
                            <span>Next</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sales;
