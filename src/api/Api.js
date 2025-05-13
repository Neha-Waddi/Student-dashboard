import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

let students = [
  { id: 1, name: "rohith", email: "rohith@gmail.com", course: "deep learning" },
  { id: 2, name: "tilak", email: "tilak@gmail.com", course: "machine learning" },
  { id: 3, name: "meera", email: "meera@gmail.com", course: "mern" },
  { id: 4, name: "neha", email: "neha@gmail.com", course: "deep learning" },
  { id: 5, name: "surya", email: "surya@gmail.com", course: "mern" },
  { id: 6, name: "sai", email: "sai@gmail.com", course: "mern" },
  { id: 7, name: "shiva", email: "shiva@gmail.com", course: "web development" },


];

mock.onGet("/api/students").reply(200, students);

mock.onPost("/api/students").reply(config => {
  const newStudent = JSON.parse(config.data);
  newStudent.id = students.length + 1;
  students.push(newStudent);
  return [200, newStudent];
});

export default axios;
