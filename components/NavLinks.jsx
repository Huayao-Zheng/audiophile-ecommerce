import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
      <li className="navLink">
        <Link href="/">HOME</Link>
      </li>
      <li className="navLink">
        <Link href="/headphones">HEADPHONES</Link>
      </li>
      <li className="navLink">
        <Link href="/speakers">SPEAKERS</Link>
      </li>
      <li className="navLink">
        <Link href="/earphones">EARPHONES</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
