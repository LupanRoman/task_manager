import Link from 'next/link';
import React from 'react';

type Props = {};

function NavLinks({}: Props) {
  return (
    <>
      <div>
        <Link href={''}>Home</Link>
        <Link href={''}>Projects</Link>
      </div>
    </>
  );
}

export default NavLinks;
