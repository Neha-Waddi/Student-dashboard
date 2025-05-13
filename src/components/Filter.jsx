
const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2 items-center">
      <label className="font-medium">Filter by Course:</label>
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Enter course name"
        className="input"
      />
    </div>
  );
};

export default Filter;