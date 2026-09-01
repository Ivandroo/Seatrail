import Link from "next/link";
import { Menu } from 'lucide-react'
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white/30 backdrop-blur-xs">
      <div className="flex justify-between items-center py-4 px-12">
        <div>
          <img
            src="./logo.jpeg"
            alt="Seatrail logo"
            className="w-10 rounded-full"
          />
        </div>
        <nav className="hidden md:block">
          <ul className="inline-flex py-2 px-6 items-center gap-4 font-medium lowercase text-secundaria">
            <li className="flex items-center px-2 transition-all duration-150 ease-in hover:translate-y-[-2px] ">
              <Link href="">Casa</Link>
            </li>
            <li className="flex items-center px-2 transition-all duration-150 ease-in hover:translate-y-[-2px] ">
              <Link href="#whoweare">Quem somos</Link>
            </li>
            <li className="flex items-center px-2 transition-all duration-150 ease-in hover:translate-y-[-2px] ">
              <Link href="">MVV</Link>
            </li>
            <li className="flex items-center px-2 transition-all duration-150 ease-in hover:translate-y-[-2px] ">
              <Link href="">Serviços</Link>
            </li>
            <li className="flex items-center px-2 transition-all duration-150 ease-in hover:translate-y-[-2px] ">
              <Link href="">Sectores</Link>
            </li>
            <li className="flex items-center px-2 transition-all duration-150 ease-in hover:translate-y-[-2px] ">
              <Link href="">Contacto</Link>
            </li>
          </ul>
        </nav>
          <button className="flex items-center px-6 py-1 bg-destaque text-base font-semibold text-secundaria cursor-pointer">
            Contactar
          </button>
          <button className="md:hidden">
            <Menu />
          </button>
      </div>
    </header>
  );
};

export default Header;
