import Link from 'next/link';
import React from 'react';
import { SlSocialGoogle } from 'react-icons/sl';

type Props = {};

function Register({}: Props) {
  return (
    <>
      <div className="flex flex-col px-8 pt-14">
        <h1 className="font-bold text-3xl text-center">Register</h1>

        <div className="register-inputs pt-5">
          <label htmlFor="username" className="pl-1 font-bold text-sm">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Foo Bar"
            autoComplete="off"
            className="bg-white shadow-input-shadow rounded-md py-2 w-full text-sm indent-2 mt-2 mb-5 outline-none"
          />
          <label htmlFor="email" className="pl-1 font-bold text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example.email@gmail.com"
            autoComplete="off"
            className="bg-white shadow-input-shadow rounded-md py-2 w-full text-sm indent-2 mt-2 mb-5 outline-none"
          />
          <label htmlFor="password" className="pl-1 font-bold text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            autoComplete="off"
            className="bg-white shadow-input-shadow rounded-md py-2 w-full text-sm indent-2 mt-2 mb-5 outline-none"
          />
          <hr />
          <p className="flex flex-col items-center pt-2 gap-2 opacity-50 cursor-pointer">
            Or register with
            <br />
            <SlSocialGoogle />
          </p>
        </div>
        <div className="register-buttons flex flex-col gap-5 items-center mt-10 ">
          <button className="px-6 py-3 bg-brand-color rounded-lg text-white font-bold">
            Register
          </button>
          <Link href={'/auth/logIn'}>
            <p className="text-gray-400 text-sm cursor-pointer">
              Already have an account?{' '}
              <span className="font-bold text-black ">Log in</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
