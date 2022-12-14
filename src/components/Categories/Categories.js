const items = [
  { id: 1, name: "adventure" },
  { id: 2, name: "action" },
  { id: 3, name: "fighting" },
  { id: 4, name: "open world" },
  { id: 5, name: "platform" },
  { id: 6, name: "racing" },
  { id: 7, name: "role play" },
  { id: 8, name: "shooter" },
  { id: 9, name: "simulation" },
  { id: 10, name: "sports" },
  { id: 11, name: "survival" },
];

const Categories = ({changeHandler}) => {
  return (
    <div className="mb-6">
      <div className="text-customWhite font-bold mb-4">دسته بندی</div>
      {items.map((item) => (
        <label
          key={item.id}
          htmlFor={item.id}
          className="py-1 flex items-center cursor-pointer"
        >
          <input
            type="checkbox"
            name="category"
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

export default Categories;
