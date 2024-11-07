import Skeloton from '@/components/skeleton';
import { deleteInvoice, getInvoice, getInvoiceDetails } from '@/services/apicalling';
import { useEffect, useState } from 'react';
import InvoiceDetails from './InvoiceDetails';
const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [invoiceDtl, setInvoiceDtl] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const entriesPerPage = 5;

    useEffect(() => {
        invoiceListHandler();

        return () => {};
    }, []);

    const invoiceListHandler = async () => {
        try {
            setLoading(true);
            const res = await getInvoice();
            setInvoices(res.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const openInvModal = async (inv) => {
        try {
            const data = {
                cus_id: inv.customer.id,
                inv_id: inv.id
            };
            const res = await getInvoiceDetails(data);
            setInvoiceDtl(res.data);
        } catch (e) {
            setInvoiceDtl({});
            console.log(e.message);
        }
        setIsOpen(true);
    };

    const handlePageChange = (direction) => {
        if (direction === 'next') {
            setCurrentPage((prev) => prev + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const removeInvHandler = async (data) => {
        try {
            await deleteInvoice({ id: data.id });
            invoiceListHandler();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="p-6 bg-white rounded-md shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Invoices</h2>
                    <button className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-md hover:bg-pink-600 transition">
                        CREATE SALE
                    </button>
                </div>

                {loading ? (
                    <Skeloton />
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                            No
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                            Name
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                            Phone
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                            Total
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                            Vat
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                            Discount
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                            Payable
                                        </th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {invoices.map((invoice, index) => (
                                        <tr key={invoice.id}>
                                            <td className="px-4 py-2 text-sm text-gray-800">
                                                {index + 1}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-800">
                                                {invoice.customer?.name}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-800">
                                                {invoice.customer?.mobile}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-800">
                                                {invoice.total}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-800">
                                                {invoice.vat}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-800">
                                                {invoice.discount}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-800">
                                                {invoice.payable}
                                            </td>
                                            <td className="px-4 py-2 flex gap-2">
                                                <span
                                                    onClick={() => openInvModal(invoice)}
                                                    className="material-icons bg-indigo-300 text-white flex items-center justify-center rounded-full transition ease-in-out cursor-pointer text-sm hover:bg-indigo-500 h-[25px] w-[25px]">
                                                    visibility
                                                </span>
                                                <span
                                                    onClick={() => removeInvHandler(invoice)}
                                                    className="material-icons bg-red-300 text-white flex items-center justify-center rounded-full transition ease-in-out cursor-pointer text-sm hover:bg-red-500 h-[25px] w-[25px]">
                                                    remove
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <p className="text-sm text-gray-600">
                                Showing {(currentPage - 1) * entriesPerPage + 1} to{' '}
                                {Math.min(currentPage * entriesPerPage, invoices.length)} of{' '}
                                {invoices.length} entries
                            </p>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handlePageChange('prev')}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition disabled:opacity-50">
                                    Previous
                                </button>
                                <button
                                    onClick={() => handlePageChange('next')}
                                    disabled={currentPage * entriesPerPage >= invoices.length}
                                    className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition disabled:opacity-50">
                                    Next
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {isOpen && <InvoiceDetails onClose={() => setIsOpen(false)} invoiceDtl={invoiceDtl} />}
        </>
    );
};

export default InvoiceList;
