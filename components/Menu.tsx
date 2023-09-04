"use client";

import Link from "next/link";
import React, { useState } from "react";

import Icons from "./Icons";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "МАГАЗИН",
    "О КОМПАНИИ",
    "ПРОДУКЦИЯ",
    "УСЛУГИ",
    "АКЦИИ И НОВОСТИ",
    "ОБРАТНАЯ СВЯЗЬ",
  ];

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className="hamburger menu" onClick={handleToggleMenu}>
        <Icons.menu size={19} />
      </div>
      {isOpen && (
        <ul className="menu-items">
          <div className="close" onClick={handleToggleMenu}>
            <Icons.close />
          </div>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href="#">{item}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
