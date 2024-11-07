import Skeloton from '@/components/skeleton';
import { getDashboardSummary } from '@/services/apicalling';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dashboardContentHandler();
    }, []);

    const dashboardContentHandler = async () => {
        try {
            setLoading(true);
            const res = await getDashboardSummary();
            setDashboardData(res.data.summary || {});
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setDashboardData({});
            console.log(e.message);
        }
    };
    return (
        <>
            {loading ? (
                <Skeloton />
            ) : (
                <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-x-2">
                                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                                        Total users
                                    </p>
                                    <div className="hs-tooltip">
                                        <div className="hs-tooltip-toggle">
                                            <svg
                                                className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                                <path d="M12 17h.01" />
                                            </svg>
                                            <span
                                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                                                role="tooltip">
                                                The number of daily users
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-1 flex items-center gap-x-2">
                                    <span className="flex items-center gap-x-1 text-green-600">
                                        <svg
                                            className="inline-block size-4 self-center"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                            <polyline points="16 7 22 7 22 13" />
                                        </svg>
                                        <span className="inline-block text-sm">
                                            <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                                                {dashboardData.customer}
                                            </h3>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-x-2">
                                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                                        Products
                                    </p>
                                </div>

                                <div className="mt-1 flex items-center gap-x-2">
                                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                                        {dashboardData.product}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-x-2">
                                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                                        Total Invoices
                                    </p>
                                </div>

                                <div className="mt-1 flex items-center gap-x-2">
                                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                                        {dashboardData.invoice}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-x-2">
                                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                                        Total Sale
                                    </p>
                                </div>

                                <div className="mt-1 flex items-center gap-x-2">
                                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                                        {dashboardData.totalSale}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-x-2">
                                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                                        Total Collections
                                    </p>
                                </div>

                                <div className="mt-1 flex items-center gap-x-2">
                                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                                        {dashboardData.totalCollection}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Dashboard;

