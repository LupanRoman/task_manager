import Link from 'next/link';
import React, { ReactNode } from 'react';
import { FcGoogle } from 'react-icons/fc';
type Props = {};

function Home() {
  return (
    <>
      <div className="px-7 flex flex-col pt-10 gap-8">
        <div className="headline flex flex-col items-center text-center">
          <h1 className="text-2xl leading-10">
            Make your workflow
            <br />
            <span className="font-bold">Flawless</span>
          </h1>
          <img src="/mainImg.jpg" alt="" className="max-h-80" />
        </div>
        <div className="auth-buttons flex flex-col items-center gap-9">
          <button className="flex items-center gap-4 py-4 px-5 text-xs font-bold shadow-google-btn-shadow rounded-lg">
            <FcGoogle className="text-2xl" />
            Sign up with google account
          </button>
          <div className="alternative-auth flex gap-8">
            <Link href={'/auth/register'}>
              <button className="px-6 py-3 bg-brand-color rounded-lg text-white font-bold">
                Register
              </button>
            </Link>
            <Link href={'/auth/logIn'}>
              <button className="px-8 py-3 bg-brand-color rounded-lg text-white font-bold">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
