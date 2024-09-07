import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Container from '../Container/Container';
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log('Login form:', { email, password }); // Debug log
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      login(storedUser);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container>
      <div className="bg-[#FAFAFA] p-6 rounded-lg border border-[#F5F5F5] w-full max-w-md md:max-w-lg lg:max-w-xl h-auto md:h-[618px] mx-auto mt-10 md:mt-0 gap-3.5 opacity-100">
        <div className="w-full h-auto py-10">
          <h1 className="w-full h-auto gap-1.5 opacity-100 text-left text-2xl md:text-3xl font-medium leading-tight">
            Welcome Back!
          </h1>
          <p className="w-full h-auto text-[#707070] gap-1.5 opacity-100 text-left text-md md:text-lg leading-tight mr-[132px]">
            Enter your Credentials to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 w-full h-auto">
          <div className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="pl-[13px] pt-4 border rounded w-full h-[52px] text-black focus:placeholder-transparent placeholder-black placeholder:text-sm placeholder-bottom"
            />
            <label className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-500 text-xs transition-all duration-200 ease-in-out pointer-events-none custom-label">
              Email Address
            </label>
          </div>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="pl-[13px] pt-4 border rounded w-full h-[52px] text-black focus:placeholder-transparent placeholder-black placeholder:text-sm placeholder-bottom"
            />
            <label className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-500 text-xs transition-all duration-200 ease-in-out">
              Password
            </label>
            <div className="flex justify-end absolute right-3 top-1/3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ?<FaEye className="text-[#707070] text-lg" />  :<FaEyeSlash className="text-[#707070] text-lg" /> }
            </div>
          </div>
          <div className='flex justify-end font-medium text-sm'>
            <a href="#" className="text-[#1E99F5]">
              Forgot Password
            </a>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="form-checkbox"
            />
            <label className="text-sm font-medium">
              I agree to the <a href="#" className="text-black underline leading-tight">Terms & Policy</a>
            </label>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded">
            Sign In
          </button>
        </form>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-black font-medium text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className='flex gap-4'>
          <button className="w-full md:w-[216px] h-[52px] bg-white border border-gray-300 text-black py-2 rounded mb-2 font-medium text-sm flex items-center justify-center gap-2">
            <img src={google} alt='Google' width={20} height={20} />
            Sign in with Google
          </button>
          <button className="w-full md:w-[216px] h-[52px] bg-white border border-gray-300 text-black py-2 rounded mb-2 font-medium text-sm flex items-center justify-center gap-2">
            <img src={apple} alt='Apple' width={20} height={20} />
            Sign in with Apple
          </button>
        </div>
        <div className='flex justify-center items-center text-sm font-medium m-2'>
          <p>Have an account? <span className='text-[#0F3DDE]'>Sign Up</span></p>
        </div>
      </div>
    </Container>
  );
};

export default Login;