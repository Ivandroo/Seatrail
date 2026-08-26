import Link from "next/link";
import { Menu } from 'lucide-react'
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center py-4 px-12">
        <div>
          <img
            src="./logo.jpeg"
            alt="Seatrail logo"
            className="w-14 rounded-full"
          />
        </div>
        <nav className="hidden md:block">
          <ul className="inline-flex bg-neve py-2 px-6 rounded-full items-center gap-4 font-medium lowercase text-secundaria">
            <li className="flex items-center bg-white px-2 rounded-full ">
              <Link href="">Casa</Link>
            </li>
            <li className="flex items-center px-2 rounded-full transition-all duration-150 ease-in hover:bg-white ">
              <Link href="#whoweare">Quem somos</Link>
            </li>
            <li className="flex items-center px-2 rounded-full transition-all duration-150 ease-in hover:bg-white ">
              <Link href="">MVV</Link>
            </li>
            <li className="flex items-center px-2 rounded-full transition-all duration-150 ease-in hover:bg-white ">
              <Link href="">Serviços</Link>
            </li>
            <li className="flex items-center px-2 rounded-full transition-all duration-150 ease-in hover:bg-white ">
              <Link href="">Sectores</Link>
            </li>
            <li className="flex items-center px-2 rounded-full transition-all duration-150 ease-in hover:bg-white ">
              <Link href="">Contacto</Link>
            </li>
          </ul>
        </nav>
          <button className="flex items-center px-6 py-2 rounded-full bg-destaque text-base font-medium text-secundaria cursor-pointer">
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
