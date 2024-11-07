import LoadingSkeleton from '@/components/skeleton';
import { useAlert } from '@/context/AlertContext';
import { createCategory, deleteCategory, getCategory, updateCategory } from '@/services/apicalling';
import { useEffect, useState } from 'react';
import AddCategory from './AddCategory';
const CategoryList = () => {
    const { showAlert } = useAlert();
    const [isCatModalOpen, setCatModalOpen] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [currentData, setCurrentData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        catListHandler();
    }, []);
    const catListHandler = async () => {
        try {
            setIsLoading(true);
            const res = await getCategory();
            setCategoryList(res.data.categoryList || []);
            setIsLoading(false);
        } catch (error) {
            setCategoryList([]);
            setIsLoading(false);
            console.log(error);
        }
    };

    const addCategoryHandler = () => {
        setCatModalOpen(true);
        setCurrentData('');
    };

    const editCategoryHandler = async (data) => {
        try {
            setCatModalOpen(true);
            setCurrentData(data);
        } catch (error) {
            showAlert(error.data.message, 'error');
        }
    };
    const submitBtnHandler = async (data) => {
        try {
            const postData = {
                id: currentData.id || null,
                name: data
            };
            let res = {};
            if (currentData.id) {
                res = await updateCategory(postData);
                catListHandler();
            } else {
                res = await createCategory(postData);
                catListHandler();
            }
            showAlert(res.data.message, 'success');
            setCatModalOpen(false);
        } catch (error) {
            showAlert(error.data.message, 'error');
        }
    };

    const deleteCategoryHandler = async (id) => {
        try {
            const res = await deleteCategory({ id: id });
            const updatedCategory = categoryList.filter((item) => item.id !== id);
            setCategoryList(updatedCategory);
            showAlert(res.data.message, 'success');
        } catch (error) {
            showAlert(error.data.message, 'error');
        }
    };

    const closeBtnHandler = (val) => {
        setCatModalOpen(val);
    };

    return (
        <>
            <div className="flex flex-col">
                <div className="m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-500 dark:border-neutral-700">
                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                                        Categories
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                                        Add categories, edit and more.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex gap-x-2  btn-gradient transition-all">
                                        <button
                                            className="cursor-pointer  text-sm font-medium rounded-lg border border-transparent flex"
                                            onClick={addCategoryHandler}>
                                            <span className="material-icons add pe-2">add</span>
                                            Add category
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {isLoading ? (
                                <LoadingSkeleton />
                            ) : (
                                <>
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
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-start">
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                                Created
                                                            </span>
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-end"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                                {categoryList.map((item, index) => (
                                                    <tr
                                                        key={index}
                                                        scope="col"
                                                        className="mt-3 pt-5 group transition-colors duration-200 min-h-[30px]">
                                                        <td
                                                            scope="col"
                                                            className="whitespace-nowrap pt-3">
                                                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 ">
                                                                <div className="flex items-center justify-center gap-x-3">
                                                                    <span className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                                        {index + 1}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td
                                                            scope="col"
                                                            className="whitespace-nowrap pt-3">
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
                                                        <td
                                                            scope="col"
                                                            className="whitespace-nowrap pt-3">
                                                            <div className="px-6">
                                                                <span className="text-sm text-gray-500 dark:text-neutral-500">
                                                                    {item.created_at}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td
                                                            scope="col"
                                                            className="whitespace-nowrap pt-3">
                                                            <div className="flex justify-end pe-6 gap-3">
                                                                <span
                                                                    onClick={() =>
                                                                        editCategoryHandler(item)
                                                                    }
                                                                    className="material-icons edit invisible group-hover:visible text-sm bg-purple-300 transition-opacity duration-300 opacity-0 group-hover:opacity-100 w-[30px] h-[30px] border rounded-full flex justify-center items-center cursor-pointer hover:text-white hover:bg-purple-700 ">
                                                                    edit
                                                                </span>
                                                                <span
                                                                    onClick={() =>
                                                                        deleteCategoryHandler(
                                                                            item.id
                                                                        )
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
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isCatModalOpen && (
                <AddCategory
                    isOpen={isCatModalOpen}
                    onClose={closeBtnHandler}
                    onSubmit={submitBtnHandler}
                    currentData={currentData}
                />
            )}
        </>
    );
};

export default CategoryList;
