import axios from '@/hooks/useAxios';

export const registerUser = async (data) => {
    const url = 'api/user-registration';

    return await axios.post(url, data);
};
export const loginUser = async (data) => {
    const url = 'api/user-login';

    return await axios.post(url, data);
};
