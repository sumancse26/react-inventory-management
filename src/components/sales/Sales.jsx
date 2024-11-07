import Skeloton from '@/components/skeleton';
import { createInvoice, getCustomer, getProduct } from '@/services/apicalling';
import { useEffect, useState } from 'react';
const Sales = () => {
    const [productList, setProductList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const [addedProducts, setAddedProducts] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState({});
    const [subTotal, setSubTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        productListHandler();
        customerListHandler();
    }, []);

    const productListHandler = async () => {
        try {
            const res = await getProduct();
            setProductList(res.data.productList || []);
        } catch (e) {
            setProductList([]);
            console.log(e.message);
        }
    };

    const addProductHandler = (data) => {
        const isExist = addedProducts.findIndex((item) => item.id == data.id);
        if (isExist === -1) {
            setAddedProducts((prevProducts) => {
                const updatedProducts = [...prevProducts, data];
                const newTotal = updatedProducts.reduce(
                    (sum, product) => Number(sum) + Number(product.price) * Number(product.unit),
                    0
                );
                setSubTotal(newTotal);
                return updatedProducts;
            });
        }
    };
    const deleteProductHandler = (data) => {
        const filteredProd = addedProducts.filter((del) => del.id !== data.id);
        const newTotal = filteredProd.reduce(
            (sum, product) => Number(sum) + Number(product.price) * Number(product.unit),
            0
        );
        setSubTotal(newTotal);
        setAddedProducts(filteredProd);
    };

    const customerListHandler = async () => {
        setLoading(true);
        try {
            const res = await getCustomer();
            setCustomerList(res.data.customerList || []);
            setLoading(false);
        } catch (e) {
            setCustomerList([]);
            setLoading(false);
            console.log(e.message);
        }
    };

    const addCustomerHandler = (data) => {
        setSelectedCustomer(data);
    };

    const calculateDiscount = (e) => {
        console.log(e.target.value);
    };

    const confirmInvoiceHandler = async () => {
        try {
            const data = {
                customer_id: selectedCustomer.id,
                total: subTotal,
                discount: 0,
                vat: 0,
                payable: subTotal,
                products: addedProducts.map((prod) => {
                    return {
                        product_id: prod.id,
                        qty: prod.unit,
                        sale_price: prod.price
                    };
                })
            };
            const res = await createInvoice(data);
            setAddedProducts([]);
            setSubTotal(0);
            setSelectedCustomer({});
            console.log(res);
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-2 h-[calc(100vh-150px)]">
                <div className="w-full md:w-1/3 px-2 mb-4 animate-fadeIn">
                    <div className="shadow-lg h-full bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h2 className="font-semibold text-gray-800">BILLED TO</h2>
                                <p className="text-sm my-1">
                                    Name:{' '}
                                    <span id="CName" className="text-indigo-800">
                                        {selectedCustomer.name || ''}
                                    </span>
                                </p>
                                <p className="text-sm my-1">
                                    Email:{' '}
                                    <span id="CEmail" className="text-indigo-800">
                                        {selectedCustomer.email || ''}
                                    </span>
                                </p>
                                <p className="text-sm my-1">
                                    User ID:{' '}
                                    <span id="CId" className="text-indigo-800">
                                        {selectedCustomer.user_id || ''}
                                    </span>
                                </p>
                            </div>
                            <div className="text-center">
                                <img
                                    className="w-16 mx-auto"
                                    src="{{ 'images/logo.png' }}"
                                    alt="Logo"
                                />
                                <p className="font-semibold text-gray-800 mt-2">Invoice</p>
                                <p className="text-sm mt-1"></p>
                            </div>
                        </div>
                        <hr className="my-3 border-gray-300" />

                        <div className="!h-[calc(100vh-535px)] overflow-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr className="flex w-full">
                                        <th className="flex items-center justify-center basis-1/12 xl:ps-0 pe-6 ps-0">
                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                SL
                                            </span>
                                        </th>
                                        <th className="flex items-center gap-x-2 basis-6/12 ps-6 lg:ps-3 xl:ps-0 pe-6 text-start">
                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                Name
                                            </span>
                                        </th>
                                        <th className="flex items-center gap-x-2 basis-1/12 ps-6 lg:ps-3 xl:ps-0 pe-6 text-start">
                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                Qty
                                            </span>
                                        </th>
                                        <th className="flex items-center justify-end gap-x-2 basis-3/12 ps-6 lg:ps-3 xl:ps-0 pe-6">
                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                Total
                                            </span>
                                        </th>
                                        <th className="flex items-center basis-2/12 pe-6 text-end"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    {addedProducts?.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="flex w-full py-2 group transition-colors duration-200">
                                            <td className="flex items-center justify-center text-sm text-gray-500 basis-1/12 pe-6 xl:ps-0 ps-0">
                                                {index + 1}
                                            </td>
                                            <td className="flex items-center basis-6/12 ps-6 lg:ps-3 xl:ps-0 pe-6 text-start">
                                                <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                    {item.name}
                                                </span>
                                            </td>
                                            <td className="flex items-center basis-1/12 ps-6 lg:ps-3 xl:ps-0 pe-6 text-start">
                                                <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                    {item.unit}
                                                </span>
                                            </td>
                                            <td className="flex items-center justify-end basis-3/12 ps-6 lg:ps-3 xl:ps-0 pe-6">
                                                <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                    {Number(item.price) * Number(item.unit)}
                                                </span>
                                            </td>
                                            <td className="flex items-center justify-end justify-end basis-1/12 pe-6">
                                                <span
                                                    onClick={() => deleteProductHandler(item)}
                                                    className="material-icons edit invisible group-hover:visible text-md text-white bg-red-500 transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-[30px] h-[30px] border rounded-full flex justify-center items-end cursor-pointer hover:text-white hover:bg-red-700 ">
                                                    remove
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <hr className="my-3 border-gray-300" />
                        <div className="text-gray-800">
                            <div>
                                <label
                                    htmlFor="discountP"
                                    className="text-xs whitespace-nowrap text-gray-800">
                                    Sub Total (%):
                                    <span className="ps-2 text-indigo-800">{subTotal}</span>
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="discountP"
                                    className="text-xs whitespace-nowrap text-gray-800">
                                    Payable (%):
                                    <span className="ps-2 text-indigo-800">{subTotal}</span>
                                </label>
                            </div>
                            <div>
                                <label
                                    htmlFor="discountP"
                                    className="text-xs whitespace-nowrap text-gray-800">
                                    Vat (%):
                                    <span className="ps-2 text-indigo-800">0</span>
                                </label>
                            </div>
                            <div className="w-full mb-4 p-0.5 rounded-lg flex items-center space-x-2">
                                <label
                                    htmlFor="discountP"
                                    className="text-xs whitespace-nowrap text-gray-800">
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

                            <button
                                onClick={confirmInvoiceHandler}
                                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold transform transition duration-300 hover:scale-105 hover:bg-purple-700">
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>

                {/* For product */}
                <div className="w-full md:w-1/3 px-2 mb-4 animate-fadeIn ">
                    <div className="shadow-lg h-full bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <label className="font-semibold text-gray-800 text-sm">
                                    Search products:
                                    <input
                                        type="text"
                                        className="w-full bg-white rounded-lg px-2 py-1 text-sm focus:outline-none
                                        focus:ring-2  focus:ring-purple-600
                                        focus:border-transparent focus:ring-offset-0 transition-all"
                                    />
                                </label>
                            </div>
                        </div>
                        {loading ? (
                            <Skeloton />
                        ) : (
                            <>
                                <div className="!h-[calc(100vh-315px)] overflow-auto">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <tr className="flex w-full">
                                                <th className="flex items-center justify-center basis-2/12 xl:ps-0 pe-6 ps-0">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        SL
                                                    </span>
                                                </th>
                                                <th className="flex items-center gap-x-2 basis-8/12 ps-6 lg:ps-3 xl:ps-0 pe-6 text-start">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Name
                                                    </span>
                                                </th>
                                                <th className="flex items-center basis-2/12 pe-6 text-end">
                                                    {/* Add any header title if needed */}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            {productList.map((prod, prodIndex) => (
                                                <tr
                                                    key={prodIndex}
                                                    className="flex w-full py-2 group transition-colors duration-200">
                                                    <td className="flex items-center justify-center text-sm text-gray-500 basis-2/12 pe-6 xl:ps-0 ps-0">
                                                        {prodIndex + 1}
                                                    </td>
                                                    <td className="flex items-center basis-8/12 ps-6 lg:ps-3 xl:ps-0 pe-6 text-start">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                            {prod.name}
                                                        </span>
                                                    </td>
                                                    <td className="flex items-center justify-end basis-2/12 pe-6">
                                                        <span
                                                            onClick={() => addProductHandler(prod)}
                                                            className="bg-purple-100 rounded-full px-3 py-1 text-sm text-purple-700 dark:text-neutral-500 hover:cursor-pointer">
                                                            Add
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="flex justify-between mt-4 text-sm text-gray-500">
                                    <span>Previous</span>
                                    <span>Next</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* For customer */}
                <div className="w-full md:w-1/3 px-2 mb-4 animate-fadeIn ">
                    <div className="shadow-lg h-full bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <label className="font-semibold text-gray-800 text-sm">
                                    Search customers:
                                    <input
                                        type="text"
                                        className="w-full bg-white rounded-lg px-2 py-1 text-sm focus:outline-none
                                        focus:ring-2  focus:ring-purple-600
                                        focus:border-transparent focus:ring-offset-0 transition-all"
                                    />
                                </label>
                            </div>
                        </div>

                        {loading ? (
                            <Skeloton />
                        ) : (
                            <>
                                <div className="!h-[calc(100vh-315px)] overflow-auto">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <tr className="flex w-full">
                                                <th className="flex items-center justify-center basis-2/12 xl:ps-0 pe-6 ps-0">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        SL
                                                    </span>
                                                </th>
                                                <th className="flex items-center gap-x-2 basis-8/12 ps-6 lg:ps-3 xl:ps-0 pe-6 text-start">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Name
                                                    </span>
                                                </th>
                                                <th className="flex items-center basis-2/12 pe-6 text-end">
                                                    {/* Add any header title if needed */}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            {customerList.map((cus, cusIndex) => (
                                                <tr
                                                    key={cusIndex}
                                                    className="flex w-full py-2 group transition-colors duration-200">
                                                    <td className="flex items-center justify-center text-sm text-gray-500 basis-2/12 pe-6 xl:ps-0 ps-0">
                                                        {cusIndex + 1}
                                                    </td>
                                                    <td className="flex items-center basis-8/12 ps-6 lg:ps-3 xl:ps-0 pe-6 text-start">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                            {cus.name}
                                                        </span>
                                                    </td>
                                                    <td className="flex items-center justify-end basis-2/12 pe-6">
                                                        <span
                                                            onClick={() => addCustomerHandler(cus)}
                                                            className="bg-purple-100 rounded-full px-3 py-1 text-sm text-purple-700 dark:text-neutral-500 hover:cursor-pointer">
                                                            Add
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="flex justify-between mt-4 text-sm text-gray-500">
                                    <span>Previous</span>
                                    <span>Next</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sales;

