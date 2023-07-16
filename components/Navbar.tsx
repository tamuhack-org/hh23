import Image from 'next/image';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  return (
    <div id="" className="hidden lg:flex items-center justify-between px-8 xl:px-24 py-4 w-full bg-dark-purple z-50 text-pale-yellow ">
      <div className="w-1/3">
        <AnchorLink href="/"
          className="text-3xl rounded-full font-black font-heading navy">
          <Image src="/assets/hh-logo.png" width={50} height={50} alt="hh-logo" />
        </AnchorLink>
      </div>
      <div className="flex justify-center items-center gap-6 w-1/3 font-bold text-lg">
        <AnchorLink href="#info" className="hover:text-shadow-pale-yellow-glow py-1 px-2 rounded-md transition-text-shadow duration-200">
          Info
        </AnchorLink>
        <AnchorLink href="#faq" className="hover:text-shadow-pale-yellow-glow py-1 px-2 rounded-md transition-text-shadow duration-200">
          FAQ
        </AnchorLink>
        <AnchorLink href="#schedule" className="hover:text-shadow-pale-yellow-glow py-1 px-2 rounded-md transition-text-shadow duration-200">
          Schedule
        </AnchorLink>
        <AnchorLink href="#prizes" className="hover:text-shadow-pale-yellow-glow py-1 px-2 rounded-md transition-text-shadow duration-200">
          Prizes
        </AnchorLink>
        <AnchorLink href="#resources" className="hover:text-shadow-pale-yellow-glow py-1 px-2 rounded-md transition-text-shadow duration-200">
          Resources
        </AnchorLink>
      </div>
      <div className="w-1/3 flex justify-end items-center">
        <Link href="https://tamuhack.org" target="_blank" rel="noopener" className="xl:flex text-4xl font-bold mr-8 transition-text-shadow duration-200 hover:text-shadow-pale-yellow-glow">
          th
        </Link>
      </div>
    </div>
  );
};

export default Navbar;