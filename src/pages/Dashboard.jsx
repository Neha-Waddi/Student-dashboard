"use client"
import  { useEffect, useState } from 'react';
import axios from '../api/Api';
import StudentForm from '../components/Form';
import StudentList from '../components/List';
import FilterBar from '../components/Filter';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('/api/students').then(res => setStudents(res.data));
  }, []);

  const handleAdd = student => {
    setStudents(prev => [...prev, student]);
  };

  const filtered = students.filter(s =>
    s.course.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Student Dashboard</h1>
      <FilterBar filter={filter} setFilter={setFilter} />
      <StudentForm onAdd={handleAdd} />
      <StudentList students={filtered} />
    </div>
  );
};

export default Dashboard;