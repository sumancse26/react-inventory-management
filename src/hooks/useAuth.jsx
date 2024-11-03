import Cookies from 'js-cookie';

const useAuth = () => {
    const token = Cookies.get('token');
    if (!token) {
        return false;
    }
    return true;
};

export default useAuth;
