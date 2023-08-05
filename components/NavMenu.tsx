import Link from "next/link";
import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { MdMenu } from "react-icons/md";

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
      <MdMenu size={30} className="fill-light-theme-pink dark:fill-pale-yellow cursor-pointer" onClick={onClick} />
      <nav className={`${dropdownIsActive ? 'flex' : 'hidden'} z-50 absolute flex-col bg-light-theme-yellow dark:bg-dark-purple text-light-theme-pink dark:text-pale-yellow font-bold right-8 top-16 border-2 gap-2 border-light-theme-pink dark:border-pale-yellow py-4 shadow-2xl rounded-lg transition-display duration-200`}>
        <Link href="#info" scroll={false} onClick={onClick} className="pr-12 pl-4">Info</Link>
        <Link href="#faq" scroll={false} onClick={onClick} className="pr-12 pl-4">FAQ</Link>
        <Link href="#schedule" scroll={false} onClick={onClick} className="pr-12 pl-4">Schedule</Link>
        <Link href="#prizes" scroll={false} onClick={onClick} className="pr-12 pl-4">Prizes</Link>
        <Link href="#resources" scroll={false} onClick={onClick} className="pr-12 pl-4">Resources</Link>
      </nav>
    </div>
  );
};

export default NavMenu;