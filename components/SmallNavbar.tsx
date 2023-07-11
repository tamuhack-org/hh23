import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MdClose, MdMenu, MdOpenInNew } from 'react-icons/md';
import Link from 'next/link';
import NavMenu from './NavMenu';

const SmallNavbar = () => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);
  const onClick = () => setDropdownIsActive(!dropdownIsActive);

  return (
    <div className="flex flex-row justify-between items-center w-full p-3 px-8">
      <Link href="/"
        className="text-3xl rounded-full font-black font-heading navy">
        <Image src="/assets/hh-logo.png" width={50} height={50} alt="hh-logo" />
      </Link>
      <NavMenu />
    </div>
  );
};

export default SmallNavbar;