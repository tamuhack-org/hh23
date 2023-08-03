import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const SmallNavbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between items-center w-full p-3 px-8">
      <Image src="/assets/hh-logo.png" width={50} height={50} alt="hh-logo" priority />
      <div className="flex flex-row items-center gap-3">
        <button
          onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        >
          {theme == 'light' ? <MdDarkMode size={25} className="fill-light-theme-pink" /> : <MdLightMode size={25} className="fill-pale-yellow" />}
        </button>
        <NavMenu />
      </div>
    </div>
  );
};

export default SmallNavbar;