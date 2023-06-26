'use client';
import { AuthService } from '@/services/auth/authService';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '@/services/auth/firebase';
import Greeting from '@/components/home/greeting';

type Props = {};

function Home({}: Props) {
  const router = useRouter();
  const [user] = useAuthState(app);

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/');
  //   }
  // }, [user]);

  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <p>Hello home page</p>
        <button
          onClick={() => {
            AuthService.signOutUser();
            router.push('/');
          }}
        >
          Sign out
        </button>
        <Greeting />
      </div>
    </>
  );
}

export default Home;
