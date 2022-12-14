import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../services/loginService";
import { useEffect, useState } from "react";
import { useAuth, useAuthActions } from "../Providers/AuthProvider";
import { useQuery } from "../hooks/useQuery";

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
  const [error, setError] = useState(null);
  const setAuth = useAuthActions();
  const auth = useAuth();
  const navigate = useNavigate();
  const query = useQuery();
  const redirect = query.get("redirect") || "";

  useEffect(() => {
    if (auth) navigate(`/${redirect}`);
  }, [auth, redirect]);

  const onSubmit = async (values) => {
    try {
      const { data } = await loginService(values);
      setError(null);
      setAuth(data);
      navigate(`/${redirect}`);
    } catch (error) {
      if (error) {
        setError("ایمیل یا پسورد اشتباه است!!");
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
    <div className="flex justify-center md:items-center">
      <form onSubmit={formik.handleSubmit} className="w-full md:w-auto">
        <Input formik={formik} name="email" label="ایمیل" type="email" />
        <Input formik={formik} name="password" label="پسورد" type="password" />
        <button
          className="w-full bg-orange py-2 text-black rounded-md mt-4 font-bold disabled:cursor-not-allowed disabled:opacity-25"
          disabled={!formik.isValid}
          type="submit"
        >
          ورود
        </button>
        {error && <p className="text-orange text-sm">{error}</p>}
        <Link to={`/signup?redirect=${redirect}`}>
          <p className="mt-4 text-sm text-orange">هنوز ثبت نام نکرده اید؟</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
