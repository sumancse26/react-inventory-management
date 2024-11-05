import { createCustomer, deleteCustomer, getCustomer, updateCustomer } from '@/services/apicalling';
import { useEffect, useState } from 'react';
import AddCustomer from './AddCustomer';

const CustomerList = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [customerList, setCustomerList] = useState([]);
    const [editCustomer, setEditCustomer] = useState({
        id: null,
        name: '',
        email: '',
        mobile: ''
    });

    useEffect(() => {
        customerListHandler();
    }, []);

    const customerListHandler = async () => {
        try {
            const res = await getCustomer();
            setCustomerList(res.data.customerList || []);
        } catch (e) {
            console.log(e);
        }
    };
    const addCustomerHandler = () => {
        setModalOpen(true);
    };

    const createUpdateCustomer = async (data) => {
        try {
            if (data.id) {
                await updateCustomer(data);
            } else {
                await createCustomer(data);
            }
            customerListHandler();
            setModalOpen(false);
        } catch (e) {
            console.log(e);
        }
    };

    const editCustomerHandler = (data) => {
        setModalOpen(true);
        setEditCustomer(data);
    };
    const deleteCustomerHandler = async (id) => {
        try {
            await deleteCustomer({ id: id });
            const filteredList = customerList.filter((item) => item.id !== id);
            setCustomerList(filteredList);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <div className="flex flex-col animate-fadeIn">
                <div className="m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-500 dark:border-neutral-700">
                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                                        Customers
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                                        Add customers, edit and more.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex gap-x-2  btn-gradient transition-all">
                                        <button
                                            className="cursor-pointer  text-sm font-medium rounded-lg border border-transparent flex"
                                            onClick={addCustomerHandler}>
                                            <span className="material-icons add pe-2">add</span>
                                            Add customer
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="!h-[calc(100vh-280px)]">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-gray-50 dark:bg-neutral-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-center">
                                                <div className="flex items-center justify-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        SL
                                                    </span>
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Email
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Mobile
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Created
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {customerList.map((item, index) => (
                                            <tr
                                                key={index}
                                                scope="col"
                                                className="mt-3 pt-5 group transition-colors duration-200 min-h-[30px]">
                                                <td scope="col" className="whitespace-nowrap pt-3">
                                                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 ">
                                                        <div className="flex items-center justify-center gap-x-3">
                                                            <span className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                                {index + 1}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td scope="col" className="whitespace-nowrap pt-3">
                                                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 ">
                                                        <div className="flex items-center gap-x-3">
                                                            <div className="grow">
                                                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                                    {item.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td scope="col" className="whitespace-nowrap pt-3">
                                                    <div className="px-6">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                            {item.email}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td scope="col" className="whitespace-nowrap pt-3">
                                                    <div className="px-6">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                            {item.mobile}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td scope="col" className="whitespace-nowrap pt-3">
                                                    <div className="px-6">
                                                        <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                            {item.created_at}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td scope="col" className="whitespace-nowrap pt-3">
                                                    <div className="flex justify-end pe-6 gap-3">
                                                        <span
                                                            onClick={() =>
                                                                editCustomerHandler(item)
                                                            }
                                                            className="material-icons edit invisible group-hover:visible text-sm bg-purple-300 transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-[30px] h-[30px] border rounded-full flex justify-center items-center cursor-pointer hover:text-white hover:bg-purple-700 ">
                                                            edit
                                                        </span>
                                                        <span
                                                            onClick={() =>
                                                                deleteCustomerHandler(item.id)
                                                            }
                                                            className="material-icons edit invisible group-hover:visible text-md text-white bg-red-500 transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-[30px] h-[30px] border rounded-full flex justify-center items-center cursor-pointer hover:text-white hover:bg-red-700 ">
                                                            remove
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                                        <span className="font-semibold text-gray-800 dark:text-neutral-200">
                                            12
                                        </span>
                                        results
                                    </p>
                                </div>

                                <div>
                                    <div className="inline-flex gap-x-2">
                                        <button
                                            type="button"
                                            className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                            <svg
                                                className="shrink-0 size-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="m15 18-6-6 6-6" />
                                            </svg>
                                            Prev
                                        </button>

                                        <button
                                            type="button"
                                            className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                            Next
                                            <svg
                                                className="shrink-0 size-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <AddCustomer
                    onClose={() => setModalOpen(false)}
                    onSubmit={createUpdateCustomer}
                    selectedCustomer={editCustomer}
                />
            )}
        </>
    );
};

export default CustomerList;

