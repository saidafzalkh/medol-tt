import Link from "next/link";

export default function Nav() {
  return (
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
  );
}
