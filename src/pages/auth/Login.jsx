import { loginUser } from '@/services/apicalling';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const logInBtnHandler = async (e) => {
        try {
            e.preventDefault();
            const res = await loginUser(formData);
            Cookies.set('token', res.data.token, { expires: 7 });
            navigate('/admin');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
                {/* Left Side - Intro Text */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                    <p className="text-lg mb-6">
                        Enter your details to access your account and continue where you left off.
                    </p>
                    <p className="text-sm">
                        Not a member?
                        <a href="/register" className="underline">
                            Sign up now
                        </a>
                        and join our community.
                    </p>
                </div>

                {/* Right Side - Login Form */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
                    <form className="space-y-6" onSubmit={logInBtnHandler}>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                name="email"
                                value={formData.email}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex justify-between items-center">
                            <label className="inline-flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-blue-600"
                                />
                                <span className="ml-2">Remember me</span>
                            </label>
                            <a
                                href="/forgot-password"
                                className="text-sm text-blue-500 hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded hover:from-blue-600 hover:to-purple-700 focus:outline-none">
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
