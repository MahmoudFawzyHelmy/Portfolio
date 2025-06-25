import React from 'react';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Create a New Account</h2>
        <RegisterForm />
      </div>
    </div>
  );
} 