import React, { useState, ChangeEvent, FormEvent } from 'react';
import loginIcons from '../assets/signin.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [data, setData] = useState<{ password: string; confirmPassword: string }>({
        password: '',
        confirmPassword: '',
      });
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    

      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
      };
      return (
        <section id="reset-password">
          <div className="mx-auto container p-4">
            <div className="bg-gray-100 border-4 rounded p-4 w-full max-w-sm mx-auto">
              <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
                <img src={loginIcons} alt="login icon" />
              </div>
              <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div>
              <label>Password:</label>
              <div className="bg-slate-200 p-2 flex">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  className="w-full h-full outline-none bg-transparent"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  required

                />
                <div className="cursor-pointer text-xl" onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <div>
              <label>Confirm Password:</label>
              <div className="bg-slate-200 p-2 flex">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Enter confirm password"
                  className="w-full h-full outline-none bg-transparent"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleChange}
                  required
                />

<div className="cursor-pointer text-xl" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[200px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
            >

<Link to="/login">Reset Password</Link>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

