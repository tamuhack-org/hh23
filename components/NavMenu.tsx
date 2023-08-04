import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
        <AnchorLink href="#info" onClick={onClick} className="pr-12 pl-4">Info</AnchorLink>
        <AnchorLink href="#faq" onClick={onClick} className="pr-12 pl-4">FAQ</AnchorLink>
        <AnchorLink href="#schedule" onClick={onClick} className="pr-12 pl-4">Schedule</AnchorLink>
        <AnchorLink href="#prizes" onClick={onClick} className="pr-12 pl-4">Prizes</AnchorLink>
        <AnchorLink href="#resources" onClick={onClick} className="pr-12 pl-4">Resources</AnchorLink>
      </nav>
    </div>
  );
};

export default NavMenu;