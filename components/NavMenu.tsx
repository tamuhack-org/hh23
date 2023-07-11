import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu, MdOpenInNew } from "react-icons/md";

const NavMenu = () => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);
  const onClick = () => setDropdownIsActive(!dropdownIsActive);

  return (
    <>
      {dropdownIsActive ?
        <MdClose size={30} className="fill-pale-yellow cursor-pointer" onClick={onClick} />
        :
        <MdMenu size={30} className="fill-pale-yellow cursor-pointer" onClick={onClick} />}
      <nav className={`${dropdownIsActive ? 'visible' : 'invisible'} absolute flex flex-col bg-dark-purple text-pale-yellow font-bold right-8 top-16 border-2 gap-2 border-pale-yellow py-4 shadow-2xl rounded-lg`}>
        <Link href="#info" onClick={onClick} className="pr-12 pl-4">Info</Link>
        <Link href="#faq" onClick={onClick} className="pr-12 pl-4">FAQ</Link>
        <Link href="#schedule" onClick={onClick} className="pr-12 pl-4">Schedule</Link>
        <Link href="#prizes" onClick={onClick} className="pr-12 pl-4">Prizes</Link>
        <Link href="#resources" onClick={onClick} className="pr-12 pl-4">Resources</Link>
        <Link href="https://tamuhack.org" target="_blank" rel="noopener" onClick={onClick} className="pr-12 pl-4 flex flex-row gap-2">
          TAMUhack
          <MdOpenInNew size={22} />
        </Link>
      </nav>
    </>
  );
};

export default NavMenu;