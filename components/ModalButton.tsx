"use client";

import React, { useState } from "react";

import { PrimaryButton } from "./Button";
import Icons from "./Icons";

interface ButtonProps {
  buttonText: string;
}

const ModalButton: React.FC<ButtonProps> = ({ buttonText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <PrimaryButton
        className="button footer__button"
        onClick={handleButtonClick}
      >
        {buttonText}
      </PrimaryButton>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Оставьте заявку</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input className="form-inputs" type="text" placeholder="ФИО" />
              <input
                className="form-inputs required"
                type="number"
                placeholder="Номер телефона*"
              />
              <input
                className="form-inputs required"
                type="text"
                placeholder="Тема обращения*"
              />
              <textarea className=" required" placeholder="Сообщение*" />

              <label>
                <input type="checkbox" />
                Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
              </label>

              <PrimaryButton>Отправить</PrimaryButton>
            </form>
            <button className="modal-close" onClick={closeModal}>
              <Icons.close />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalButton;
