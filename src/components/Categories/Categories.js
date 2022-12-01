const Categories = () => {
  return (
    <>
      <div className="text-customWhite font-bold mb-4">دسته بندی</div>
      <label htmlFor="adventure" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="adventure"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Adventure</span>
      </label>
      <label htmlFor="action" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="action"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Action</span>
      </label>
      <label htmlFor="fighting" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="fighting"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Fighting</span>
      </label>
      <label htmlFor="platform" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="platform"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Platform</span>
      </label>
      <label htmlFor="racing" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="racing"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Racing</span>
      </label>
      <label htmlFor="rolePlay" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="rolePlay"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Role Playing Game</span>
      </label>
      <label htmlFor="shooter" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="shooter"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Shooter</span>
      </label>
      <label htmlFor="simulation" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="simulation"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Simulation</span>
      </label>
      <label htmlFor="sports" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="sports"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Sports</span>
      </label>
      <label htmlFor="openWorld" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="openWorld"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Open World</span>
      </label>
      <label htmlFor="survival" class="py-1 flex items-center cursor-pointer">
        <input
          type="checkbox"
          name="category"
          id="survival"
          class="form-checkbox bg-gray/[0.18] rounded text-orange focus:ring-orange"
        />
        <span class="text-sm mr-2">Survival</span>
      </label>
    </>
  );
};

export default Categories;
