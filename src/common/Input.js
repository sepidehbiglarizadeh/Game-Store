const Input = ({formik,name,label,type="text"}) => {
    return ( 
        <div className="mb-5">
          <label className="mb-1 block">{label} :</label>
          <input
            className="w-full md:w-[400px] py-2 px-4 block  rounded-md outline-none focus:border-2 focus:border-orange glassMorphism shadow-none"
            type={type}
            name={name}
            {...formik.getFieldProps(name)}
          />
          {formik.errors[name] && formik.touched[name] && (
            <div className="text-orange mt-1 text-[10px]">{formik.errors[name]}</div>
          )}
        </div>
     );
}
 
export default Input;