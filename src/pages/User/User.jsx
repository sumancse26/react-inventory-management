import User from '../../components/user/UserList.jsx';
import { useRef } from 'react';

const UserPage = () => {
    const modalRef = useRef(null);
    return (
        <>
            <User ref={modalRef} type="text" />
        </>
    );
};

export default UserPage;
