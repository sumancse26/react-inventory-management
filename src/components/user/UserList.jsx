/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const UserList = forwardRef(({ type }, ref) => {
    const test = () => {
        ref.current;
    };

    return <input ref={ref} type={type} value="test input" onChange={test} />;
});

UserList.displayName = 'UserList';

export default UserList;

