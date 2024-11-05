import axios from '@/hooks/useAxios';

export const registerUser = async (data) => {
    const url = 'api/user-registration';

    return await axios.post(url, data);
};
export const loginUser = async (data) => {
    const url = 'api/user-login';

    return await axios.post(url, data);
};
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
