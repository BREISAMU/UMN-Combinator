"use client";  // Add this line at the top

import React, { useState } from 'react'; 
import api from '../api'

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setpasswordConfirmation] = useState('');
  const [email, setEmail] = useState('');

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Password Confirmation:', passwordConfirmation);
    console.log('Email:', email);

    // Add your registration logic here (e.g., sending data to a backend)
    await api.post("/register/", {
      username: username,
      password: password,
      email: email  
    });
  };

  return (
    <form onSubmit={handleRegisterSubmit}>
      <div>
        <h3>username</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <h3>password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <h3>confirm password</h3>
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setpasswordConfirmation(e.target.value)}
        />
      </div>
      <div>
        <h3>email</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">REGISTER</button>
    </form>
  );
}


export default function Register() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div>
            <RegistrationForm />
          </div>
        </div>
      </main>
    );
  }