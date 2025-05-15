import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signing in with:', { email, password, firstname, lastname });
        // Add your login logic here
      };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm space-y-6 text-center"
    >
      <h2 className="text-3xl font-medium text-black">Create Account</h2>

      <input
        type="text"
        placeholder="First Name"
        value={email}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none"
        required
      />



      <input
        type="text"
        placeholder="Last Name"
        value={email}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full border border-gray-400 px-4 py-3 text-sm focus:outline-none"
        required
      />

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

      <button
        type="submit"
        className="w-full bg-black text-white py-3 hover:opacity-90 transition"
      >
        Create 
      </button>
      <p className="text-sm">
            <Link to="/login" className="underline text-black">
            Already have an account?
          </Link>
        </p>
    </form>
  </div>
  )
}

export default SignIn