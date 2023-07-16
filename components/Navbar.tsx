import Image from 'next/image';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  return (
    <div className="hidden lg:flex items-center justify-between px-8 xl:px-24 py-4 w-full bg-dark-purple z-50 text-pale-yellow border-b-3 border-pale-yellow">
      <div className="w-1/3">
        <AnchorLink href="/"
          className="text-3xl rounded-full font-black font-heading navy">
          <Image src="/assets/hh-logo.png" width={50} height={50} alt="hh-logo" />
        </AnchorLink>
      </div>
      <div className="flex justify-center items-center gap-8 w-1/3 font-bold text-lg">
        <AnchorLink href="#info">
          Info
        </AnchorLink>
        <AnchorLink href="#faq">
          FAQ
        </AnchorLink>
        <AnchorLink href="#schedule">
          Schedule
        </AnchorLink>
        <AnchorLink href="#prizes">
          Prizes
        </AnchorLink>
        <AnchorLink href="#resources">
          Resources
        </AnchorLink>
      </div>
      <div className="w-1/3 flex justify-end items-center">
        <Link href="https://tamuhack.org" target="_blank" rel="noopener" className="xl:flex text-4xl font-bold mr-8 ">
          th
        </Link>
      </div>
    </div>
  );
};

export default Navbar;