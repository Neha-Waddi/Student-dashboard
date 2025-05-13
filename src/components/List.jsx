import Card from './Card';

const List = ({ students }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {students.map(student => (
        <Card key={student.id} student={student} />
      ))}
    </div>
  );
};

export default List;