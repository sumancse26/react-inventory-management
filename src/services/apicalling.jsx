import axios from '@/hooks/useAxios';

export const registerUser = async (data) => {
    const url = 'api/user-registration';

    return await axios.post(url, data);
};
export const loginUser = async (data) => {
    const url = 'api/user-login';

    return await axios.post(url, data);
};

//category api route defination
export const createCategory = async (data) => {
    const url = 'api/create-category';

    return await axios.post(url, data);
};
export const updateCategory = async (data) => {
    const url = 'api/update-category';

    return await axios.post(url, data);
};
export const getCategory = async () => {
    const url = 'api/get-category';

    return await axios.get(url);
};
export const deleteCategory = async (id) => {
    const url = 'api/delete-category';

    return await axios.post(url, id);
};

//customers api route defination
export const createCustomer = async (data) => {
    const url = 'api/create-customer';

    return await axios.post(url, data);
};
export const updateCustomer = async (data) => {
    const url = 'api/update-customer';

    return await axios.post(url, data);
};

export const getCustomer = async () => {
    const url = 'api/get-customer';

    return await axios.get(url);
};

export const deleteCustomer = async (id) => {
    const url = 'api/delete-customer';

    return await axios.post(url, id);
};

//product route definetion
export const getProduct = async (data) => {
    const url = 'api/get-product';

    return await axios.get(url, data);
};
export const createProduct = async (data) => {
    const url = 'api/create-product';

    return await axios.post(url, data);
};
export const updateProduct = async (data) => {
    const url = 'api/update-product';

    return await axios.post(url, data);
};
export const deleteProduct = async (data) => {
    const url = 'api/delete-product';

    return await axios.post(url, data);
};

//sales and invoice route definetion
export const createInvoice = async (data) => {
    const url = 'api/create-invoice';

    return await axios.post(url, data);
};

export const getInvoice = async () => {
    const url = 'api/get-invoice';

    return await axios.get(url);
};
export const getInvoiceDetails = async (data) => {
    const url = 'api/invoice-details';

    return await axios.post(url, data);
};
export const deleteInvoice = async (data) => {
    const url = 'api/delete-details';

    return await axios.post(url, data);
};
export const selesReport = async (data) => {
    const url = `/api/sales-report/${data.fromDate}/${data.toDate}`;

    return await axios.get(url);
};
export const getDashboardSummary = async () => {
    const url = `/api/summary`;

    return await axios.get(url);
};
