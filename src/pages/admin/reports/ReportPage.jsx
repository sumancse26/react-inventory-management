import { selesReport } from '@/services/apicalling';
import { useState } from 'react';
const SalesReport = () => {
    const [date, setDate] = useState({
        fromDate: '',
        toDate: ''
    });

    const downloadReports = async () => {
        try {
            const res = await selesReport(date);
            window.location.href = res.data.file_path;
            window.location.download();
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <>
            <div className="max-w-xs mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sales Report</h2>

                <div className="mb-4">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                        Date From
                    </label>
                    <div className="relative">
                        <input
                            type="date"
                            value={date.fromDate}
                            onChange={(e) => setDate({ ...date, fromDate: e.target.value })}
                            placeholder="mm/dd/yyyy"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3M3 11h18M5 19h14M7 9h10M3 19h18M7 17h10"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-600 text-sm font-medium mb-2">Date To</label>
                    <div className="relative">
                        <input
                            type="date"
                            placeholder="mm/dd/yyyy"
                            value={date.toDate}
                            onChange={(e) => setDate({ ...date, toDate: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3M3 11h18M5 19h14M7 9h10M3 19h18M7 17h10"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <button
                    onClick={downloadReports}
                    className="w-full py-2 mt-4 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
                    DOWNLOAD
                </button>
            </div>
        </>
    );
};

export default SalesReport;
