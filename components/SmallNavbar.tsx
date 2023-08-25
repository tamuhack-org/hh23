import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { motion } from 'framer-motion';

const SmallNavbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div className="flex flex-row justify-between items-center w-full p-3 px-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
      <Link href="https://tamuhack.org" rel="noopener" target="_blank">
        <Image src="/assets/hh-logo.png" width={50} height={50} alt="hh-logo" priority />
      </Link>
      <div className="flex flex-row items-center gap-3">
        <button
          onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        >
          {theme == 'light' ? <MdDarkMode size={25} className="fill-light-theme-pink" /> : <MdLightMode size={25} className="fill-pale-yellow" />}
        </button> 
        <NavMenu />
      </div>
    </motion.div>
  );
};

export default SmallNavbar;