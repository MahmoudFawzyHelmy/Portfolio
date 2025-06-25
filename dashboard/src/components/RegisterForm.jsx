import React, { useState } from 'react';

export default function RegisterForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    aboutMe: '',
    password: '',
    portfolioURL: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/v1/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const text = await res.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch (err) {
        data = {};
      }
      if (!res.ok) {
        if (data && data.message) throw new Error(data.message);
        if (res.status === 409) throw new Error('Email already exists');
        throw new Error('Registration failed');
      }
      setSuccess('Registration successful! You can now login.');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Full Name</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block mb-1">Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block mb-1">About Me</label>
        <textarea name="aboutMe" value={form.aboutMe} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block mb-1">Portfolio URL</label>
        <input name="portfolioURL" value={form.portfolioURL} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
      </div>
      <div>
        <label className="block mb-1">Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
} 