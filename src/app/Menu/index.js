"use client";
import Link from "next/link";
import React, { useRef, createContext } from "react";
import ui from "./styles.module.css";
import OptionsNavigation from "./OptionsNavigation";
import ProfileOverview from "../structure/ProfileOverview";

/**
 * @type {import("react").Context<import("./types").ContextMenu|undefined>}
 */
export const ContextMenu = createContext(undefined);

export default function Menu() {
  /**
   * @type {import("react").MutableRefObject<HTMLElement>}
   */
  const mobileMenu = useRef();

  const toggleMenu = () => {
    mobileMenu.current.classList.toggle(`${ui.displayMenu}`);
  };

  const closeMenu = () => {
    mobileMenu.current.classList.add(`${ui.displayMenu}`);
  };

  return (
    <ContextMenu.Provider value={{ closeMenu }}>
      <nav className={ui.nav}>
        <div className={ui.navItems}>
          <Link className={ui.logo} onClick={closeMenu} href="/">
            <img
              className="cursor"
              src="/amplus_logo.svg"
              alt="logo_de_amplus"
            />
          </Link>
          <OptionsNavigation />
        </div>

        {/* <div className={ui.profileDesktop}>
          <ProfileOverview />
        </div> */}

        <button onClick={toggleMenu} className={ui.menuMobile}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>

      <div
        ref={mobileMenu}
        className={`${ui.expandMenuMobile} ${ui.displayMenu}`}
      >
        <ProfileOverview/>
        <OptionsNavigation />
      </div>
    </ContextMenu.Provider>
  );
}
