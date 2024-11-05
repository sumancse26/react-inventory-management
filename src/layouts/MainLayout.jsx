import Header from '@/components/header/Header.jsx';
import MobileMenu from '@/components/mobileMenu/MobileMenu.jsx';
import SideNav from '@/components/sideNav/SideNavbar.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="bg-gray-50 dark:bg-neutral-900">
            <Header />
            <MobileMenu />
            <SideNav />
            <div className="w-full lg:ps-64">
                <div className="p-4 sm:p-6 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;

