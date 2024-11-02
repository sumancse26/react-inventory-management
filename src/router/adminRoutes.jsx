import PrivateRoute from '@/components/PrivateRoute';
import Layout from '@/layouts/MainLayout';
import Customer from '@admin/customer/Customer.jsx';
import Dashboard from '@admin/dashboard/Dashboard.jsx';
import Product from '@admin/product/Product.jsx';
import Sales from '@admin/sales/Sales.jsx';
import User from '@admin/User/User.jsx';
const AdminRoutes = [
    {
        path: '/admin/*',
        element: (
            <PrivateRoute>
                <Layout />
            </PrivateRoute>
        ),
        children: [
            { path: '', element: <Dashboard /> },
            {
                path: 'customers',
                element: <Customer />
            },
            {
                path: 'products',
                element: <Product />
            },
            {
                path: 'sales',
                element: <Sales />
            },
            {
                path: 'users',
                element: <User />
            }
        ]
    }
];

export default AdminRoutes;
