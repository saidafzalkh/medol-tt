import Link from "next/link";

import p1 from "@/public/products/1.png";
import p2 from "@/public/products/2.png";
import p3 from "@/public/products/3.png";
import p4 from "@/public/products/4.png";
import p5 from "@/public/products/5.png";
import p6 from "@/public/products/6.png";

import ProductCard from "../cards/ProductCard";
import SectionLink from "../SectionLink";
import Title from "../Title";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Эндоваскулярная хирургия",
      image: p1,
      link: "#",
    },
    {
      id: 2,
      title: "Лабораторная диагностика",
      image: p2,
      link: "#",
    },
    {
      id: 3,
      title: "Кардиохирургия",
      image: p3,
      link: "#",
    },
    {
      id: 4,
      title: "ДИАБЕТ",
      image: p4,
      link: "#",
    },
    {
      id: 5,
      title: "ЭНДОУРОЛОГИЯ",
      image: p5,
      link: "#",
    },
    {
      id: 6,
      title: "АРИТМОЛОГИЯ",
      image: p6,
      link: "#",
    },
  ];

  return (
    <section className="section products">
      <div className="container">
        <Title>ПРОДУКЦИЯ</Title>

        <div className="products__grid">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>

        <div className="section__footer">
          <SectionLink text="Перейти в каталог нашей продукции " />
        </div>
      </div>
    </section>
  );
}
