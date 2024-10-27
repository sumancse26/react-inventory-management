import { Routes, Route } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import MobileMenu from '../components/mobileMenu/MobileMenu.jsx';
import SideNav from '../components/sideNav/SideNavbar.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';
import User from '../pages/User/User.jsx';
import Customer from '../pages/customer/Customer.jsx';
import Product from '../pages/product/Product.jsx';
import Sales from '../pages/sales/Sales.jsx';

const Layout = () => {
    return (
        <div className="bg-gray-50 dark:bg-neutral-900">
            <Header />
            <MobileMenu />
            <SideNav />
            <div className="w-full lg:ps-64">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<User />} />
                        <Route path="/customers" element={<Customer />} />
                        <Route path="/products" element={<Product />} />
                        <Route path="/sales" element={<Sales />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Layout;
