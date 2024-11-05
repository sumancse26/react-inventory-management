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
