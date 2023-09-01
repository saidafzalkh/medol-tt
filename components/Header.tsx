import Image from "next/image";
import Link from "next/link";

import CustomSelect from "@/components/CustomSelect";
import Icons from "@/components/Icons";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__line">
          <div className="header__line-block">
            <div className="header__icon-block">
              <Icons.map size={25} />
            </div>
            <address>
              г.Ташкент, Чиланзар <br />
              10 квартал, дом 3/1
            </address>
          </div>

          <div className="header__line-block">
            <div className="header__icon-block">
              <Icons.phone size={22} />
            </div>
            <span>
              +998 71 276-62-53 <br />
              +998 71 276-62-54
            </span>
          </div>

          <Link href="/">
            <Image src="/logo.png" alt="Medol Logo" width={200} height={58} />
          </Link>

          <div className="header__icon-block">
            <Icons.search size={26} />
          </div>

          <div className="header__button">
            <Icons.facebook size={22} />
            <small>Мы на Facebook</small>
          </div>

          <CustomSelect />
        </div>

        <nav className="nav header__nav">
          <ul>
            <li>
              <Link href="#">МАГАЗИН</Link>
            </li>
            <div className="separator"></div>
            <li className="active">
              <Link href="#">О КОМПАНИИ</Link>
            </li>
            <div className="separator"></div>
            <li>
              <Link href="#">ПРОДУКЦИЯ</Link>
            </li>
            <div className="separator"></div>
            <li>
              <Link href="#">УСЛУГИ</Link>
            </li>
            <div className="separator"></div>
            <li>
              <Link href="#">АКЦИИ И НОВОСТИ</Link>
            </li>
            <div className="separator"></div>
            <li>
              <Link href="#">ОБРАТНАЯ СВЯЗЬ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
