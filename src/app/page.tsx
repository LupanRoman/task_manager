'use client';

// import { AuthService } from '@/services/auth/authService';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { FcGoogle } from 'react-icons/fc';
// import app from '@/services/auth/firebase';
type Props = {};

function Home() {
  // const [user] = useAuthState(app);
  // const route = useRouter();

  return (
    <>
      {/* <div className="px-7 flex flex-col pt-10 gap-8 md:gap-20">
        <div className="headline flex flex-col items-center text-center md:flex-row md:w-full md:justify-between ">
          <h1 className="text-2xl leading-10 md:pl-20 md:text-4xl md:leading-loose">
            Make your workflow
            <br />
            <span className="font-bold">Flawless</span>
          </h1>
          <img
            src="/mainImg.jpg"
            alt=""
            className="max-h-80 md:pr-20"
            placeholder="blur"
          />
        </div>
        <div className="auth-buttons flex flex-col items-center gap-9">
          <button
            className="flex items-center gap-4 py-4 px-5 text-xs font-bold shadow-google-btn-shadow rounded-lg"
            onClick={() => {
              AuthService.signInWithGoogle();
              if (user?.emailVerified == true) {
                route.push('/home');
              }
            }}
          >
            <FcGoogle className="text-2xl" />
            Sign up with google account
          </button>
          <div className="alternative-auth flex gap-8">
            <Link href={'/register'}>
              <button className="px-6 py-3 bg-brand-color rounded-lg text-white font-bold">
                Register
              </button>
            </Link>
            <Link href={'/logIn'}>
              <button className="px-8 py-3 bg-brand-color rounded-lg text-white font-bold">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div> */}
      <h1>Home</h1>
    </>
  );
}

export default Home;
