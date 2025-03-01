const Select = ({ value, onChange }) => (
  <div className="flex items-center px-8 gap-6 border-1 border-gray-800 rounded-full h-[50px]">
    <label htmlFor="type">Type</label>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      id="type"
    >
      <option value="BLOCK">Block</option>
      <option value="MONSTER">Monster</option>
      <option value="DESTINATION">Destination</option>
    </select>
  </div>
);

export default Select;
