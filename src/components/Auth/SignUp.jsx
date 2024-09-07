import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Container from '../Container/Container';
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const { signup } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password };
    console.log('SignUp form submitted:', newUser); // Debug log
    signup(newUser);
  };

  return (
    <Container>
      <div className="bg-[#FAFAFA] p-6 rounded-lg border border-[#F5F5F5] w-full max-w-md md:max-w-lg lg:max-w-xl h-auto md:h-[618px] mx-auto mt-10 md:mt-0 gap-3.5 opacity-100">
        <div className="w-full h-auto py-10 text-center">
          <h1 className="font-barlow text-4xl font-bold leading-tight">Welcome To</h1>
          <h2 className="font-barlow text-4xl font-bold leading-tight">FurniFlex</h2>
          <p className="font-barlow text-4xl font-bold leading-tight">Signup for purchase your desire products</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 w-full h-auto">
          <div className="flex gap-4">
            <div className="relative w-full">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="pl-[13px] pt-4 border rounded w-full h-[52px] text-black focus:placeholder-transparent placeholder-black placeholder:text-sm placeholder-bottom"
              />
              <label className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-500 text-xs transition-all duration-200 ease-in-out pointer-events-none custom-label">
                First Name <span className='ml-2'>(optional)</span>
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="pl-[13px] pt-4 border rounded w-full h-[52px] text-black focus:placeholder-transparent placeholder-black placeholder:text-sm placeholder-bottom"
              />
              <label className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-500 text-xs transition-all duration-200 ease-in-out pointer-events-none custom-label">
                Last Name
              </label>
            </div>
          </div>
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
              {showPassword ? <FaEyeSlash className="text-[#707070] text-lg" /> : <FaEye className="text-[#707070] text-lg" />}
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
            Sign Up
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
            Sign up with Google
          </button>
          <button className="w-full md:w-[216px] h-[52px] bg-white border border-gray-300 text-black py-2 rounded mb-2 font-medium text-sm flex items-center justify-center gap-2">
            <img src={apple} alt='Apple' width={20} height={20} />
            Sign up with Apple
          </button>
        </div>
        <div className='flex justify-center items-center text-sm font-medium m-2'>
          <p>Already have an account? <span className='text-[#0F3DDE]'>Sign In</span></p>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;