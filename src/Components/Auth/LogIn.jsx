import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 text-center"
      >
        <h2 className="text-3xl font-medium text-black">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none"
          required
        />

        <div className="text-left">
          <a href="#" className="text-sm text-black underline">
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 hover:opacity-90 transition"
        >
          Sign in
        </button>

        <p className="text-sm">
            <Link to="/signup" className="underline text-black">
            Create account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LogIn;
