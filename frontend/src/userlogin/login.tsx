import React, { useState, ChangeEvent, FormEvent } from 'react';
import loginIcons from '../assets/signin.jpg';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: ""
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  console.log("Data login ", data);

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-gray-100 border-4 rounded p-4 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form className="pt-6" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email :</label>
              <div className="bg-slate-200 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  className="w-full h-full outline-none bg-transparent"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
</div>
</div>
<div>
              <label>Password :</label>
              <div className="bg-slate-200 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  className="w-full h-full outline-none bg-transparent"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />

<div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <Link
                to={'/forgot-password'}
                className="block w-fit ml-auto hover:underline hover:text-red-600 mt-1"
              >
                Forgot Password ?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
            >
              Login

            </button>
            </form>
          <p className="my-5">
            Don't have an account?{' '}
            <Link to={'/sign-up'} className="text-red-600 hover:text-red-700 hover:underline">
              Sign Up
            </Link>
    </p>
        </div>
        
      </div>
    </section>
  );
};

export default Login;


