import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import signupService from "../services/signupService";
import { useEffect, useState } from "react";
import { useAuth, useAuthActions } from "../Providers/AuthProvider";
import { useQuery } from "../hooks/useQuery";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("نام اجباری است").min(6, "طول نام معتبر نیست"),
  email: Yup.string()
    .email("فرمت ایمیل اشتباه است")
    .required("ایمیل اجباری است"),
  phoneNumber: Yup.string()
    .required("شماره تماس اجباری است")
    .matches(/^[0-9]{11}$/, "شماره موبایل اشتباه است")
    .nullable(),
  password: Yup.string()
    .required("پسورد اجباری است")
    .min(8, "طول پسورد کوتاه است - طول پسورد باید حداقل 8 کارکتر باشد"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "پسوردها باید مطابقت داشته باشند"
  ),
});

const SignupPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const auth=useAuth();
  const query= useQuery();
  const redirect = query.get("redirect") || "";

  useEffect(() => {
    if (auth) navigate(`/${redirect}`);
  }, [auth, redirect]);

  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = { name, email, phoneNumber, password };
    try {
      const { data } = await signupService(userData);
      setAuth(data);
      navigate(`/${redirect}`);
    } catch (error) {
      if (error) {
        setError("ایمیل از قبل وجود دارد!!");
      }
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <div className="flex justify-center md:items-center ">
      <form onSubmit={formik.handleSubmit} className="mb-8 w-full md:w-auto">
        <Input formik={formik} name="name" label="نام" />
        <Input formik={formik} name="email" label="ایمیل" type="email" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="شماره موبایل"
          type="tel"
        />
        <Input formik={formik} name="password" label="پسورد" type="password" />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="تائید پسورد"
          type="password"
        />
        <button
          className="w-full bg-orange py-2 text-black rounded-md mt-4 font-bold disabled:cursor-not-allowed disabled:opacity-25"
          disabled={!formik.isValid}
          type="submit"
        >
          ثبت نام
        </button>
        {error && <p className="text-orange text-sm">{error}</p>}
        <Link to={`/login?redirect=${redirect}`}>
          <p className="mt-4 text-sm text-orange">قبلا ثبت نام کرده اید؟</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;
