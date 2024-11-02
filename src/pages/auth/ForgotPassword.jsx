const ForgotPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                    Forgot Password?
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Enter your email to receive instructions to reset your password.
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded hover:from-blue-600 hover:to-purple-700 focus:outline-none">
                        Send Reset Link
                    </button>
                </form>

                <div className="text-center mt-6">
                    <a href="/login" className="text-sm text-blue-500 hover:underline">
                        Back to Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
