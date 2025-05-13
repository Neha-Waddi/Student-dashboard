"use client";
import { useState } from 'react';
import axios from '../api/Api';
import { auth } from '../auth/firbase';
import { onAuthStateChanged } from 'firebase/auth';

const Form = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', email: '', course: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, course } = form;

    if (!name || !email || !course) {
      return setError('All fields are required');
    }

    setLoading(true);
    setError(''); // Clear any previous errors

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const res = await axios.post('/api/students', form);
          onAdd(res.data);
          setForm({ name: '', email: '', course: '' });
          setLoading(false);
        } catch (err) {
          console.error('Error adding student:', err);
          setError('Error adding student');
          setLoading(false);
        }
      } else {
        setError('Login required to add student');
        setLoading(false);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="block text-gray-700 text-xl font-bold mb-6 text-center">
        Add New Student
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="course"
        >
          Course
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="course"
          type="text"
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
        />
      </div>
      {error && <p className="text-red-500 text-sm italic mb-4">{error}</p>}
      <div className="flex items-center justify-between">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Student'}
        </button>
      </div>
    </form>
  );
};

export default Form;