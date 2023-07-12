import Link from "next/link";
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { MdMenu, MdOpenInNew } from "react-icons/md";

function listenForOutsideClicks(listening: boolean, setListening: Dispatch<SetStateAction<boolean>>, menuRef: MutableRefObject<any>, setDropdownIsActive: Dispatch<SetStateAction<boolean>>) {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        if (menuRef.current.contains(evt.target)) return;
        setDropdownIsActive(false);
      });
    });
  }
}

const NavMenu = () => {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [dropdownIsActive, setDropdownIsActive] = useState(false);
  const onClick = () => setDropdownIsActive(!dropdownIsActive);

  useEffect(listenForOutsideClicks(
    listening,
    setListening,
    menuRef,
    setDropdownIsActive,
  ))

  return (
    <div ref={menuRef}>
      <MdMenu size={30} className="fill-pale-yellow cursor-pointer" onClick={onClick} />
      <nav className={`${dropdownIsActive ? 'opacity-100' : 'opacity-0'} absolute flex flex-col bg-dark-purple text-pale-yellow font-bold right-8 top-16 border-2 gap-2 border-pale-yellow py-4 shadow-2xl rounded-lg transition-opacity duration-200`}>
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
    </div>
  );
};

export default NavMenu;