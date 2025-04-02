import {useAuth0} from "@auth0/auth0-react";

const LoginPage: React.FC = () => {
  const {loginWithRedirect, isLoading, error} = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/',
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          My Inventory Login
        </h1>
        {error && (
          <div className="mb-4 text-center text-red-600">
            <p>Authentication Error:</p>
            <p className="text-sm">{error.message}</p>
          </div>
        )}
        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white font-semibold focus:ring-blue-500'
          }`}
        >
          {isLoading ? 'Logging In...' : 'Log In / Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
