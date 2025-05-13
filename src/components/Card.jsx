import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ student }) => (
  <div className="p-4 border rounded shadow transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
    <h2 className="font-semibold text-lg text-gray-800">{student.name}</h2>
    <p className="text-gray-700 text-sm mb-1">{student.email}</p>
    <p className="text-sm text-gray-600 italic">{student.course}</p>
    <Link
      to={`/student/${student.id}`}
      className="inline-block mt-2 text-blue-500 text-sm hover:underline"
    >
      View Details
    </Link>
  </div>
);

export default Card;