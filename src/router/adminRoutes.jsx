import PrivateRoute from '@/components/PrivateRoute';
import Layout from '@/layouts/MainLayout';
import Category from '@admin/category/Category.jsx';
import Customer from '@admin/customer/Customer.jsx';
import Dashboard from '@admin/dashboard/Dashboard.jsx';
import Invoice from '@admin/invoice/Invoice.jsx';
import Product from '@admin/product/Product.jsx';
import Report from '@admin/reports/ReportPage.jsx';
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
            {
                path: '',
                element: <Dashboard />
            },
            {
                path: 'categories',
                element: <Category />
            },
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
                path: 'invoice',
                element: <Invoice />
            },
            {
                path: 'reports',
                element: <Report />
            },
            {
                path: 'users',
                element: <User />
            }
        ]
    }
];

export default AdminRoutes;
