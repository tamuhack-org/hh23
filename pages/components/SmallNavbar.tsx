import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MdClose, MdMenu } from 'react-icons/md';
import Link from 'next/link';

const SmallNavbar = () => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);
  const onClick = () => setDropdownIsActive(!dropdownIsActive);

  return (
    <div className="flex flex-row justify-between items-center w-full p-3 px-8">
      <Link href="/"
        className="text-3xl rounded-full font-black font-heading navy">
        <Image src="/assets/hh-logo.png" width={50} height={50} alt="hh-logo" />
      </Link>
      {dropdownIsActive ?
        <MdClose size={30} className="fill-pale-yellow cursor-pointer" onClick={onClick} />
        :
        <MdMenu size={30} className="fill-pale-yellow cursor-pointer" onClick={onClick} />}
      <nav className={`${dropdownIsActive ? 'visible' : 'invisible'} absolute flex flex-col bg-dark-purple text-pale-yellow font-bold right-8 top-16 border-2 gap-2 border-pale-yellow py-4 shadow-2xl rounded-lg`}>
        <Link href="#info" onClick={onClick} className="pr-16 pl-4">Info</Link>
        <Link href="#faq" onClick={onClick} className="pr-16 pl-4">FAQ</Link>
        <Link href="#schedule" onClick={onClick} className="pr-16 pl-4">Schedule</Link>
        <Link href="#prizes" onClick={onClick} className="pr-16 pl-4">Prizes</Link>
        <Link href="#resources" onClick={onClick} className="pr-16 pl-4">Resources</Link>
      </nav>
    </div>
  );
};

export default SmallNavbar;