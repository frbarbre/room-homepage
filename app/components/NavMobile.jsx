"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function NavMobile(props) {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className="md:hidden relative flex justify-center items-center p-12">
      <div
        className="absolute top-[50%] left-[30px] translate-y-[-50%] py-8 flex items-center justify-center w-[20px] z-10 cursor-pointer"
        onClick={() => setMenuActive((prevMenu) => !prevMenu)}
      >
        <img
          src={menuActive ? "/icon-close.svg" : "icon-hamburger.svg"}
          alt="menu-toggle"
        />
      </div>
      <img src="/logo.svg" alt="room-logo" />
      <AnimatePresence>
        {menuActive && (
          <m.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 bg-black-opaque "
          >
            <m.nav
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "-100%",
              }}
              className="w-screen h-[110px] bg-white flex items-center justify-end gap-6 pr-[30px]"
            >
              {props.Navlinks.map((link) => (
                <ul
                  key={nanoid()}
                  className="group flex flex-col gap-2 translate-y-[5px]"
                >
                  <li className="text-black font-semibold cursor-pointer">
                    {link.title}
                  </li>
                  <li className="w-[60%] h-[2px] bg-black mx-auto scale-0 group-hover:scale-100 transition-all" />
                </ul>
              ))}
            </m.nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
