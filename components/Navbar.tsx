import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="hidden lg:flex items-center justify-between px-8 xl:px-32 py-4 w-full bg-dark-purple z-50 text-pale-yellow border-b-3 border-pale-yellow">
      <div className="w-1/3">
        <Link href="/"
          className="text-3xl rounded-full font-black font-heading navy">
          <Image src="/assets/hh-logo.png" width={50} height={50} alt="hh-logo" />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-8 w-1/3 font-bold text-lg">
        <Link href="#info">
          Info
        </Link>
        <Link href="#faq">
          FAQ
        </Link>
        <Link href="#schedule">
          Schedule
        </Link>
        <Link href="#prizes">
          Prizes
        </Link>
        <Link href="#resources">
          Resources
        </Link>
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