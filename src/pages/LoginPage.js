import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("فرمت ایمیل اشتباه است")
    .required("ایمیل اجباری است"),
  password: Yup.string().required("پسورد اجباری است"),
});

const LoginPage = () => {
  const onSubmit = () => {
    console.log("submitted");
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="flex justify-center md:items-center">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="ایمیل" type="email" />
        <Input formik={formik} name="password" label="پسورد" type="password" />
        <button
          className="w-full bg-orange py-2 text-black rounded-md mt-4 font-bold disabled:cursor-not-allowed disabled:opacity-25"
          disabled={!formik.isValid}
          type="submit"
        >
          ورود
        </button>
        <p className="mt-4 text-sm text-orange">هنوز ثبت نام نکرده اید؟</p>
      </form>
    </div>
  );
};

export default LoginPage;
