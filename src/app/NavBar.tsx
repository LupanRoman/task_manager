import React from 'react';

type Props = {};

export default function NavBar({}: Props) {
  return (
    <>
      <div className="flex justify-between px-8 h-20 items-center shadow-nav-shadow rounded-b-xl font-bold text-3xl">
        <h1>Flawless</h1>
        <img src="/LOGO.png" alt="" width={30} />
      </div>
    </>
  );
}
