import React, { useState } from 'react';

export default function Login() {
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);

  const toggleCreateAccountForm = () => {
    setShowCreateAccountForm(!showCreateAccountForm);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-blue-600 p-4 rounded-lg w-80 text-center border-10 border-black">
        {showCreateAccountForm ? (
          // Show create account form
          <div>
            <h1 className="text-2xl font-semibold">Create an Account</h1>
            {/* Add form inputs for creating an account */}
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium text-gray-700">
                First Name
              </label>
              <input
                type=""
                id="user_name"
                placeholder="First Name"
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="newEmail" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="newEmail"
                placeholder="Email"
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="newPassword" className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Password"
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Child's Name
              </label>
              <input
                type="name"
                id="child_name"
                placeholder="Child's Name"
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            {/* Add more fields as needed */}
          </div>
        ) : (
          // Show login form
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Login</h1>
            {/* Add login form fields */}
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>
        )}

        <div className="mt-6 space-y-4">
          {showCreateAccountForm ? (
            // Show "Back to Login" button when the create account form is shown
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded w-full"
              onClick={toggleCreateAccountForm}
            >
              Back to Login
            </button>
          ) : (
            // Show "Create an Account" button when the login form is shown
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded w-full"
              onClick={toggleCreateAccountForm}
            >
              Create an Account
            </button>
          )}

          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
            {showCreateAccountForm ? 'Register' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};