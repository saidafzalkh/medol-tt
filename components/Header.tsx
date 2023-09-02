import Image from "next/image";
import Link from "next/link";

import CustomSelect from "@/components/CustomSelect";
import Icons from "@/components/Icons";

import Menu from "./Menu";
import Nav from "./Nav";

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

          <Link href="/" className="logo">
            <Image src="/logo.png" alt="Medol Logo" width={200} height={58} />
          </Link>

          <div className="header__icon-block md map">
            <Icons.map size={25} />
          </div>

          <div className="header__icon-block md">
            <Icons.phone size={22} />
          </div>

          <div className="header__icon-block search">
            <Icons.search size={26} />
          </div>

          <div className="header__button facebook">
            <Icons.facebook size={22} />
            <small>Мы на Facebook</small>
          </div>

          <CustomSelect />

          <Menu />
        </div>

        <Nav />
      </div>
    </header>
  );
}
