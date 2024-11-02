import PrivateRoute from '@/components/PrivateRoute';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Signup';
import AdminRoutes from './adminRoutes';
import FrontendRoutes from './frontend';
const AppRoutes = [
    ...FrontendRoutes,
    ...AdminRoutes,
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/forgot-password',
        element: (
            <PrivateRoute>
                <ForgotPassword />
            </PrivateRoute>
        )
    }
];

export default AppRoutes;
