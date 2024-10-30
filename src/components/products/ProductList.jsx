const ProductList = () => {
    return (
        <div className="flex flex-col animate-fadeIn">
            <div className="m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-500 dark:border-neutral-700">
                        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                                    Products
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-neutral-400">
                                    Add customers, edit and more.
                                </p>
                            </div>

                            <div>
                                <div className="flex gap-x-2  btn-gradient transition-all">
                                    <button className="cursor-pointer  text-sm font-medium rounded-lg border border-transparent flex">
                                        <span className="material-icons add pe-2">add</span>
                                        Add Produuct
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="!h-[calc(100vh-280px)]">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className="bg-gray-50 dark:bg-neutral-800">
                                    <tr>
                                        <th scope="col" className="ps-6  text-start">
                                            <label
                                                htmlFor="hs-at-with-checkboxes-main"
                                                className="flex">
                                                <input
                                                    type="checkbox"
                                                    className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    id="hs-at-with-checkboxes-main"
                                                />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
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
                                                    Position
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Status
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Portfolio
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
                                    <tr
                                        scope="col"
                                        className="mt-3 pt-5 group transition-colors duration-200 min-h-[30px]">
                                        <td className="whitespace-nowrap pt-3">
                                            <div className="ps-6">
                                                <label
                                                    htmlFor="hs-at-with-checkboxes-1"
                                                    className="flex">
                                                    <input
                                                        type="checkbox"
                                                        className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        id="hs-at-with-checkboxes-1"
                                                    />
                                                    <span className="sr-only">Checkbox</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td scope="col" className="whitespace-nowrap pt-3">
                                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 ">
                                                <div className="flex items-center gap-x-3">
                                                    <img
                                                        className="inline-block size-[38px] rounded-full"
                                                        src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                        alt="Avatar"
                                                    />
                                                    <div className="grow">
                                                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                            Christina Bersh
                                                        </span>
                                                        <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                                            christina@site.com
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td scope="col" className="w-72 whitespace-nowrap pt-3">
                                            <div className="px-6">
                                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                    Director
                                                </span>
                                                <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                                    Human resources
                                                </span>
                                            </div>
                                        </td>
                                        <td scope="col" className="whitespace-nowrap pt-3">
                                            <div className="px-6">
                                                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                    <svg
                                                        className="size-2.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    Active
                                                </span>
                                            </div>
                                        </td>
                                        <td scope="col" className="whitespace-nowrap pt-3">
                                            <div className="px-6">
                                                <div className="flex items-center gap-x-3">
                                                    <span className="text-xs text-gray-500 dark:text-neutral-500">
                                                        1/5
                                                    </span>
                                                    <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                                        <div
                                                            className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200"
                                                            role="progressbar"
                                                            style={{
                                                                width: '25%'
                                                            }}
                                                            aria-valuenow="25"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td scope="col" className="whitespace-nowrap pt-3">
                                            <div className="px-6">
                                                <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                    28 Dec, 12:12
                                                </span>
                                            </div>
                                        </td>
                                        <td scope="col" className="whitespace-nowrap pt-3">
                                            <span className="material-icons edit invisible group-hover:visible text-sm bg-purple-300 transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-[30px] h-[30px] border rounded-full flex justify-center items-center cursor-pointer hover:text-white hover:bg-purple-700 ">
                                                edit
                                            </span>
                                        </td>
                                    </tr>
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
    );
};

export default ProductList;

