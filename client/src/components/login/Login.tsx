import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ENDPOINT } from "../../utils/constants";
import { useSetRecoilState } from "recoil";
import { isAuthenticatedAtom, userDetailsAtom } from "../../recoil/atom";

const Login = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const auth = useSetRecoilState(isAuthenticatedAtom);
  const user = useSetRecoilState(userDetailsAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Login = async (data: any) => {
    try {
      setLoading(true);
      const response = await axios.post(`${ENDPOINT}/auth/signin`, {
        email: data.email,
        password: data.password,
      });
      if (response.status === 200) {
        auth(true);
        console.log(response.data.token);

        const token = response.data.token;

        const loggedInResponse = await axios.get(
          `${ENDPOINT}/user/get-logged-in`,
          {
            headers: {
              accesstoken: token,
            },
          }
        );

        console.log(loggedInResponse);
        user(loggedInResponse.data.user);
        navigation("/");

        toast.success("Login successful");
      }
    } catch (error: any) {
      if (error?.response && error?.response?.status === 401) {
        toast.error(error?.response?.data);
      } else if (error?.response && error?.response?.status === 404) {
        toast.error(error?.response?.data);
      } else {
        toast.error("Login failed");
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        backgroundColor: "#000000",
        backgroundImage:
          'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 800 800"%3E%3Cg %3E%3Ccircle fill="%23000000" cx="400" cy="400" r="600"/%3E%3Ccircle fill="%23230046" cx="400" cy="400" r="500"/%3E%3Ccircle fill="%232f0052" cx="400" cy="400" r="400"/%3E%3Ccircle fill="%233b075e" cx="400" cy="400" r="300"/%3E%3Ccircle fill="%2348156a" cx="400" cy="400" r="200"/%3E%3Ccircle fill="%23552277" cx="400" cy="400" r="100"/%3E%3C/g%3E%3C/svg%3E\')',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      className="bg-cover bg-center flex w-full"
    >
      <div className="md:p-10 p-6 flex flex-col w-full min-h-screen text-white justify-center items-center">
        <form
          onSubmit={handleSubmit(Login)}
          className="bg-[#230046] shadow-md shadow-purple-700 md:p-6 p-4 rounded md:w-96 w-full flex flex-col"
        >
          <p className="text-center text-xl">Login</p>
          <div className="w-full flex mt-4 flex-col gap-4">
            <input
              className="p-3 outline-none rounded text-slate-950"
              placeholder="email"
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <span className="text-red-500">
                {errors.email.message as string}
              </span>
            )}
            <input
              className="p-3 outline-none rounded text-slate-950"
              placeholder="password"
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
          </div>

          {loading ? (
            <div
              aria-disabled
              className=" p-3 mt-4 cursor-not-allowed active:scale-[98%] flex items-center justify-center duration-200 font-bold text-center bg-slate-950 hover:bg-[#0c0f20] rounded text-white"
            >
              <div className=" w-6 h-6 rounded-full animate-spin border-4 border-white border-t-[#48156a]"></div>
            </div>
          ) : (
            <button className="p-3 mt-4  bg-slate-950 hover:bg-[#0c0f20] rounded">
              Login
            </button>
          )}

          <div className="w-full flex justify-between mt-2 text-gray-300">
            <Link to="/" className="hover:text-gray-100">
              Forgot password?
            </Link>
            <Link to="/signup" className="hover:text-gray-100">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
