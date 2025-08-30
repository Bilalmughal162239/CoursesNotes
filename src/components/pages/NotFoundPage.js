import { useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaFrown, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden"
            >
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white text-center">
                    <div className="flex justify-center mb-4">
                        <FaFrown className="text-5xl animate-bounce" />
                    </div>
                    <h1 className="text-4xl font-bold mb-2">404</h1>
                    <p className="text-xl">Oops! Page not found</p>
                </div>

                <div className="p-8 text-center">
                    <div className="mb-6">
                        <FaSearch className="text-6xl mx-auto text-indigo-400 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Lost in Space?</h2>
                        <p className="text-gray-600">
                            The page you're looking for doesn't exist or has been moved.
                            Let's get you back on track!
                        </p>
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={() => navigate('/')}
                            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FaHome /> Back to Home
                        </button>

                        <button
                            onClick={() => window.history.back()}
                            className="w-full border border-indigo-500 text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FaRocket /> Go Back
                        </button>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-gray-500 text-sm">
                            Need help? <a href="/contact" className="text-indigo-600 hover:underline">Contact support</a>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}