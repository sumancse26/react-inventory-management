/* eslint-disable react/prop-types */
const InvoiceModal = ({ onClose, invoiceDtl }) => {
    const { customer, invoice, products } = invoiceDtl;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[50%]">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">Invoice</h2>
                </div>

                <div className="p-6">
                    <div className="flex justify-between mb-6">
                        {/* Billed To Section */}
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">BILLED TO</h3>
                            <p className="text-sm text-gray-600">
                                Name:{' '}
                                <span className="font-semibold text-indigo-500">
                                    {customer.name}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600">
                                Email:{' '}
                                <span className="font-semibold text-indigo-500">
                                    {customer.email}
                                </span>
                            </p>
                            <p className="text-sm text-gray-600">
                                User ID:{' '}
                                <span className="font-semibold text-indigo-500">{customer.id}</span>
                            </p>
                        </div>

                        {/* Logo and Date Section */}
                        <div className="text-right">
                            <div className="flex items-center justify-end gap-2">
                                <span className="text-2xl font-bold text-indigo-500">.shop</span>
                                <span className="text-gray-600">Invoice</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">Date: {invoice.created_at}</p>
                        </div>
                    </div>

                    {/* Items Table */}
                    <table className="w-full border-t border-gray-200">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="py-2 text-left text-sm font-semibold text-gray-600">
                                    Name
                                </th>
                                <th className="py-2 text-center text-sm font-semibold text-gray-600">
                                    Qty
                                </th>
                                <th className="py-2 text-right text-sm font-semibold text-gray-600">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="py-2 text-sm text-gray-600">
                                        {item.product.name}
                                    </td>
                                    <td className="py-2 text-center text-sm text-gray-600">
                                        {item.product.unit}
                                    </td>
                                    <td className="py-2 text-right text-sm text-gray-600">
                                        ${item.product.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Summary Section */}
                    <div className="mt-6">
                        <p className="text-sm text-gray-600">
                            <strong>Total:</strong> ${invoice.total}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>VAT (5%):</strong> ${invoice.vat}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Discount:</strong> ${invoice.discount}
                        </p>
                        <p className="text-sm text-gray-800 font-semibold">
                            <strong>PAYABLE:</strong> ${invoice.payable}
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end p-6 space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-md hover:bg-pink-600 transition">
                        CLOSE
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition">
                        PRINT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceModal;
