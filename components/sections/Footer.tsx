import Image from "next/image";
import Link from "next/link";

import { PrimaryButton } from "../Button";
import Icons from "../Icons";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container footer__wrapper">
          <div className="footer__main">
            <div className="footer__contacts">
              <h3 className="title">Контакты</h3>
              <div className="content">
                <div className="footer__line-block">
                  <div className="footer__icon-block">
                    <Icons.map size={25} />
                  </div>
                  <address>
                    г.Ташкент, Чиланзар <br />
                    10 квартал, дом 3/1
                  </address>
                </div>

                <div className="footer__line-block">
                  <div className="footer__icon-block">
                    <Icons.phone size={22} />
                  </div>
                  <span>
                    +998 71 276-62-53 <br />
                    +998 71 276-62-54
                  </span>
                </div>

                <div className="footer__line-block">
                  <div className="footer__icon-block">
                    <Icons.mail size={23} />
                  </div>
                  <span>
                    <a href="mailto:info@medol.uz">info@medol.uz</a>
                  </span>
                </div>

                <PrimaryButton className="footer__button">
                  Оставить заявку
                </PrimaryButton>
              </div>
            </div>
            <div className="footer__about">
              <Link href="/" className="logo">
                <Image
                  src="/logo.png"
                  alt="Medol Logo"
                  width={200}
                  height={58}
                />
              </Link>
              <p>
                Наша цель – построить прозрачный, долгосрочный бизнес, приносить
                огромную пользу населению, путем решения глобальных вопросов.
                Внедряя инновационные технологии на рынок Узбекистана.
              </p>
            </div>
            <small>© 2021 ООО «Medical Online Services»</small>
          </div>
          <div className="footer__menu">
            <div className="footer__menu-wrapper">
              <div className="menu-item menu-about">
                <h3>О компании</h3>
                <ul>
                  <li>
                    <Link href="">История</Link>
                  </li>
                  <li>
                    <Link href="">Партнеры</Link>
                  </li>
                  <li>
                    <Link href="">Вакансии</Link>
                  </li>
                </ul>
              </div>

              <div className="menu-item menu-about">
                <h3>Продукция</h3>
                <ul>
                  <li>
                    <Link href="">Эндоваскулярная хирургия</Link>
                  </li>
                  <li>
                    <Link href="">Аритмология</Link>
                  </li>
                  <li>
                    <Link href="">Лабораторная диагностика</Link>
                  </li>
                  <li>
                    <Link href="">Кардиохирургия</Link>
                  </li>
                  <li>
                    <Link href="">Эндоурология</Link>
                  </li>
                  <li>
                    <Link href="">Нейрохирургия</Link>
                  </li>
                  <li>
                    <Link href="">Анестезиология и реанимация</Link>
                  </li>
                  <li>
                    <Link href="">Диабет</Link>
                  </li>
                </ul>
              </div>

              <div className="menu-item menu-about">
                <h3>Услуги</h3>
                <ul>
                  <li>
                    <Link href="">Сервис</Link>
                  </li>
                  <li>
                    <Link href="">Регистрации</Link>
                  </li>
                  <li>
                    <Link href="">Услуги логистики</Link>
                  </li>
                </ul>
              </div>
            </div>
            .
            <small>
              Сайт разработан компанией <a href="#">www.uz</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
