import Image from 'next/image';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [toggleHover, setToggleHover] = useState(false);

  return (
    <motion.div className="hidden lg:flex items-center justify-between px-8 xl:px-24 py-4 w-full z-50 text-light-theme-pink bg-light-theme-yellow dark:text-pale-yellow dark:bg-dark-purple" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
      <Link href="https://tamuhack.org" rel="noopener" target="_blank">
        <Image src="/assets/hh-logo.png" width={50} height={50} alt="hh-logo" priority />
      </Link>
      <div className="flex justify-center items-center gap-6 font-bold text-lg">
        <AnchorLink href="#info" className="hover:text-shadow-light-theme-pink-glow dark:hover:text-shadow-pale-yellow-glow py-1 px-2 rounded-md transition-text-shadow duration-200">
          Info
        </AnchorLink>
        <AnchorLink href="#faq" className="hover:text-shadow-light-theme-pink-glow dark:hover:text-shadow-pale-yellow-glow py-1 px-2 rounded-md transition-text-shadow duration-200">
          FAQ
        </AnchorLink>
        <AnchorLink href="#schedule" className="hover:text-shadow-light-theme-pink-glow dark:hover:text-shadow-pale-yellow-glow py-1 px-2 rounded-md transition-text-shadow duration-200">
          Schedule
        </AnchorLink>
        <AnchorLink href="#prizes" className="hover:text-shadow-light-theme-pink-glow dark:hover:text-shadow-pale-yellow-glow py-1 px-2 rounded-md transition-text-shadow duration-200">
          Prizes
        </AnchorLink>
        <AnchorLink href="#resources" className="hover:text-shadow-light-theme-pink-glow dark:hover:text-shadow-pale-yellow-glow py-1 px-2 rounded-md transition-text-shadow duration-200">
          Resources
        </AnchorLink>
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
          onMouseOver={() => setToggleHover(true)}
          onMouseLeave={() => setToggleHover(false)}
        >
          {theme === 'light' ? <MdDarkMode size={25} className={`fill-light-theme-pink ${toggleHover ? "theme-toggle-light" : ""}`} /> : <MdLightMode size={25} className={`fill-pale-yellow ${toggleHover ? "theme-toggle-dark" : ""}`} />}
        </button>
      </div>
    </motion.div>
  );
};

export default Navbar;