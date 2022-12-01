const items = [
  { id: 1, name: "ps4" },
  { id: 2, name: "ps5" },
  { id: 3, name: "xbox one" },
  { id: 4, name: "xbox series x and series S" },
  { id: 5, name: "microsoft windows" },
  { id: 7, name: "nintendo switch" },
];

const Platforms = () => {
  return (
    <div className="mb-6">
      <div className="text-customWhite font-bold mb-4"> پلتفرم ها</div>
      {items.map((item) => (
        <label htmlFor={item.name} class="py-1 flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="platform"
            id={item.name}
            class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
          />
          <span class="text-sm mr-2">{item.name}</span>
        </label>
      ))}
    </div>
  );
};

export default Platforms;
