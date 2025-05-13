"use client"
import  { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/Api';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/firbase';

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        navigate('/login');
      } else {
        axios.get('/api/students').then(res => {
          const found = res.data.find(s => s.id === parseInt(id));
          if (found) setStudent(found);
          else setError('Student not found');
        });
      }
    });
  }, [id, navigate]);

  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (!student) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>
    </div>
  );
};

export default StudentDetails;
