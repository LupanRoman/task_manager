'use client';
import React, { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/auth/authService';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '@/services/auth/firebase';

type Props = {};

function LogIn({}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [user] = useAuthState(app);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user]);

  return (
    <>
      <div className="flex flex-col px-8 pt-14 md:px-96">
        <h1 className="font-bold text-3xl text-center">Log in</h1>

        <div className="register-inputs pt-20">
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
            onChange={(event) => {
              setEmail(event.target.value);
            }}
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
            className="bg-white shadow-input-shadow rounded-md py-2 w-full text-sm indent-2 mt-2 mb-3 outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="register-buttons flex flex-col gap-5 items-center mt-32 ">
          <button
            className="px-6 py-3 bg-brand-color rounded-lg text-white font-bold"
            onClick={() => {
              AuthService.logInUser({ email, password });
              if (user?.emailVerified == true) {
                router.push('/dashboard');
              } else {
                router.push('/auth/verifyEmail');
              }
            }}
          >
            Log in
          </button>
          <Link href={'/auth/register'}>
            <p className="text-gray-400 text-sm cursor-pointer">
              Don't have an account yet?
              <span className="font-bold text-black ">Register</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LogIn;
