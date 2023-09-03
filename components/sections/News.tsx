import newsImage from "@/public/news.jpg";

import NewsCard from "../cards/NewsCard";
import Icons from "../Icons";
import SectionLink from "../SectionLink";
import Title from "../Title";

export default function News() {
  const news = [
    {
      id: 1,
      title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      data: "26.07.2021",
      description:
        "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
      image: newsImage,
      link: "#",
    },
    {
      id: 2,
      title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      data: "26.07.2021",
      description:
        "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
      image: newsImage,
      link: "#",
    },
    {
      id: 3,
      title: "Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича",
      data: "26.07.2021",
      description:
        "С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...",
      image: newsImage,
      link: "#",
    },
  ];

  return (
    <section className="section news">
      <Title>НОВОСТИ</Title>

      <div className="container">
        <div className="arrows">
          <div className="arrows__container">
            <div className="arrows__block">
              <Icons.arrowLeft />
            </div>
            <div className="arrows__block">
              <Icons.arrowRight />
            </div>
          </div>
        </div>

        <div className="services__grid news__container">
          {news.map((newsItem) => (
            <NewsCard key={newsItem.id} data={newsItem} />
          ))}
        </div>
      </div>

      <div className="section__footer">
        <SectionLink text="Посмотреть все новости " />
        <SectionLink text="Подписаться на новости " />
      </div>
    </section>
  );
}
