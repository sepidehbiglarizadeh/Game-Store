const items = [
  { id: 1, name: "ps4" },
  { id: 2, name: "ps5" },
  { id: 3, name: "xbox one" },
  { id: 4, name: "xbox series x and series S" },
  { id: 5, name: "microsoft windows" },
  { id: 7, name: "nintendo switch" },
];

const Platforms = ({ changeHandler }) => {
  return (
    <div className="mb-6">
      <div className="text-customWhite font-bold mb-4"> پلتفرم ها</div>
      {items.map((item) => (
        <label key={item.id} htmlFor={item.id} className="py-1 flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="platform"
            id={item.id}
            className="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
            value={item.name}
            onChange={changeHandler}
          />
          <span className="text-sm mr-2">{item.name}</span>
        </label>
      ))}
    </div>
  );
};

export default Platforms;
