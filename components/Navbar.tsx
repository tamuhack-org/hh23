import Image from 'next/image';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  return (
    <div className="hidden lg:flex items-center justify-between px-8 xl:px-24 py-4 w-full z-50 text-light-theme-pink bg-light-theme-yellow dark:text-pale-yellow dark:bg-dark-purple">
      <div className="w-1/3">
        <AnchorLink href="/">
          <Image src="/assets/hh-logo.png" width={50} height={50} alt="hh-logo" className="drop-shadow-2xl" />
        </AnchorLink>
      </div>
      <div className="flex justify-center items-center gap-6 w-1/3 font-bold text-lg">
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
      <div className="w-1/3 flex justify-end items-center">
        <Link href="https://tamuhack.org" target="_blank" rel="noopener" className="xl:flex text-4xl font-bold mr-8 transition-text-shadow duration-200 hover:text-shadow-light-theme-pink-glow dark:hover:text-shadow-pale-yellow-glow">
          th
        </Link>
      </div>
    </div>
  );
};

export default Navbar;