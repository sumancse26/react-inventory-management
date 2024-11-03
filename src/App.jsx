import Alert from '@/components/Alert';
import { AlertProvider } from '@/context/AlertContext';
import AppRoutes from '@/router/routes.jsx';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <>
            <AlertProvider>
                <Alert />
                <Routes>
                    {AppRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element}>
                            {route.children &&
                                route.children.map((child, childIndex) => (
                                    <Route
                                        key={childIndex}
                                        path={child.path}
                                        element={child.element}
                                    />
                                ))}
                        </Route>
                    ))}
                </Routes>
            </AlertProvider>
        </>
    );
}

export default App;

