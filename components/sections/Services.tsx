import s1 from "@/public/services/1.png";
import s2 from "@/public/services/2.png";
import s3 from "@/public/services/3.png";

import ServiceCard from "../cards/ServiceCard";
import Title from "../Title";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "СЕРВИС ОБОРУДОВАНИЯ",
      image: s1,
      link: "#",
      description:
        "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......",
    },
    {
      id: 2,
      title: "РЕГИСТРАЦИИ",
      image: s2,
      link: "#",
      description:
        "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....",
    },
    {
      id: 3,
      title: "УСЛУГИ ЛОГИСТИКИ",
      image: s3,
      link: "#",
      description:
        "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....",
    },
  ];

  return (
    <section className="section services">
      <Title>УСЛУГИ</Title>

      <div className="services__wrapper">
        <div className="container">
          <div className="services__grid">
            {services.map((service) => (
              <ServiceCard key={service.id} data={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
