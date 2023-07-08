import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { MdClose, MdMenu } from 'react-icons/md';
import Link from 'next/link';

const SmallNavbar = () => {
  const dropdownRef = useRef(null);
  const [dropdownIsActive, setDropdownIsActive] = useState(false);
  const onClick = () => setDropdownIsActive(!dropdownIsActive);


  return (
    <div className="flex flex-row justify-between items-center w-full p-3 px-8">
      <Image src="/assets/hh-logo.svg" width={50} height={50} alt="hh-logo" />
      {dropdownIsActive ? 
      <MdClose size={30} className="fill-pale-yellow cursor-pointer" onClick={onClick} />
      :
      <MdMenu size={30} className="fill-pale-yellow cursor-pointer" onClick={onClick} />}
      <nav ref={dropdownRef} className={`${dropdownIsActive ? 'block' : 'hidden'} absolute bg-dark-purple text-pale-yellow font-bold right-8 top-16 border-4 border-pale-yellow py-4 pr-16 pl-4`}>
        <ul className="flex flex-col gap-2">
          <li><Link href="#info" onClick={onClick}>Info</Link></li>
          <li><Link href="#faq" onClick={onClick}>FAQ</Link></li>
          <li><Link href="#schedule" onClick={onClick}>Schedule</Link></li>
          <li><Link href="#prizes" onClick={onClick}>Prizes</Link></li>
          <li><Link href="#resources" onClick={onClick}>Resources</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default SmallNavbar;