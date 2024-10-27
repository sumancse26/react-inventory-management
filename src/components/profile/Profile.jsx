const Profile = () => {
    return (
        <div className="flex flex-col animate-fadeIn">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle ">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">Users</h2>
                                <p className="text-sm text-gray-600 dark:text-neutral-400">Add users, edit and more.</p>
                            </div>

                            <div>
                                <div className="inline-flex gap-x-2">
                                    <a
                                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                        href="#">
                                        View all
                                    </a>

                                    <a
                                        className="py-2 cursor-pointer px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="hs-scale-animation-modal"
                                        data-hs-overlay="#hs-scale-animation-modal">
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
                                            <path d="M5 12h14" />
                                            <path d="M12 5v14" />
                                        </svg>
                                        Add user
                                    </a>
                                </div>
                            </div>
                        </div>

                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead className="bg-gray-50 dark:bg-neutral-800">
                                <tr>
                                    <th scope="col" className="ps-6 py-3 text-start">
                                        <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                                            <input
                                                type="checkbox"
                                                className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                id="hs-at-with-checkboxes-main"
                                            />
                                            <span className="sr-only">Checkbox</span>
                                        </label>
                                    </th>

                                    <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
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
                                <tr>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 py-3">
                                            <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                <input
                                                    type="checkbox"
                                                    className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    id="hs-at-with-checkboxes-1"
                                                />
                                                <span className="sr-only">Checkbox</span>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
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
                                    <td className="h-px w-72 whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                Director
                                            </span>
                                            <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                                Human resources
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
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
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-xs text-gray-500 dark:text-neutral-500">1/5</span>
                                                <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                                                    <div
                                                        className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200"
                                                        role="progressbar"
                                                        style={{ width: '25%' }}
                                                        aria-valuenow="25"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-3">
                                            <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                28 Dec, 12:12
                                            </span>
                                        </div>
                                    </td>
                                    <td className="size-px whitespace-nowrap">
                                        <div className="px-6 py-1.5">
                                            <a
                                                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                                href="#">
                                                Edit
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-neutral-400">
                                    <span className="font-semibold text-gray-800 dark:text-neutral-200">12</span>{' '}
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

                        {/* User modal */}

                        <div
                            id="hs-scale-animation-modal"
                            className="hs-overlay hidden hs-overlay-backdrop-open:bg-gray-900/50 size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
                            role="dialog"
                            tabIndex="-1"
                            aria-labelledby="hs-scale-animation-modal-label">
                            <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                                <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-400 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                                        <h3
                                            id="hs-scale-animation-modal-label"
                                            className="font-bold text-gray-800 dark:text-white">
                                            Modal title
                                        </h3>
                                        <button
                                            type="button"
                                            className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                                            aria-label="Close"
                                            data-hs-overlay="#hs-scale-animation-modal">
                                            <span className="sr-only">Close</span>
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
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="p-4 overflow-y-auto">
                                        <p className="mt-1 text-gray-800 dark:text-neutral-400">
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content.
                                        </p>
                                    </div>
                                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                                        <button
                                            type="button"
                                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                            data-hs-overlay="#hs-scale-animation-modal">
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
