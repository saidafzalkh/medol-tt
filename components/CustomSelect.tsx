"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import en from "@/public/icons/en.png";
import ru from "@/public/icons/ru.png";
import uz from "@/public/icons/uz.png";

import Icons from "./Icons";

export default function CustomSelect() {
  type optionType = { value: string; label: string; image: StaticImageData };

  const options: optionType[] = [
    { value: "ru", label: "Русский", image: ru },
    { value: "en", label: "English", image: en },
    { value: "uz", label: "O’zbekcha", image: uz },
  ];

  const [selected, setSelected] = useState<optionType>(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: optionType) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="custom-select">
      <div className="custom-select__selected" onClick={handleOpen}>
        <Image
          width={30}
          height={30}
          src={selected.image}
          alt={selected.value}
        />
        <span className="option-label label">{selected.label}</span>
        <Icons.arrowBottom size={11} />
      </div>

      <div className={`${!isOpen && "hidden"} custom-select__options`}>
        {options.map((option) => (
          <div
            className="option"
            onClick={() => handleSelect(option)}
            key={option.value}
          >
            <Image
              width={30}
              height={30}
              src={option.image}
              alt={option.value}
            />
            <span className="option-label">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
