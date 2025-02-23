import React, { useState, ChangeEvent, FormEvent } from 'react';
import forgotPasswordIcon from '../assets/forgotpasswnedSend.jpg';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [data, setData] = useState<{ email: string }>({ email: '' });

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

  console.log('Data ForgotPassword', data);
  return (
    <section id="ForgotPassword">
      <div className="mx-auto container p-4 mt-12">
        <div className="bg-gray-100 border-4 rounded p-4 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={forgotPasswordIcon} alt="forgot-password icon" />
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
                <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[200px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
            >
              <Link to={'/reset-password'}>Forgot Password</Link>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;