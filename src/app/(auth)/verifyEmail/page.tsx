import React from 'react';
import Link from 'next/link';

type Props = {};

function VerifyEmail({}: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-72">
        <div className="font-bold text-center flex flex-col gap-2 pt-20">
          <h1 className="text-3xl">Verify your email</h1>
          <p className="text-sm">
            We ve sent you an email verification link
            <br />
            on the email provided
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Link href={'/logIn'}>
            <button className="px-6 py-3 bg-brand-color rounded-lg text-white font-bold">
              Log in
            </button>
          </Link>
          <button className="bg-brand-color rounded-lg text-white text-xs px-1 py-2">
            Resend email
          </button>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
