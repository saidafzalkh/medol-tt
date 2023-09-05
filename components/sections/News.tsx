import SectionLink from "../SectionLink";
import NewsSlider from "../sliders/NewsSlider";
import Title from "../Title";

export default function News() {
  return (
    <section className="section news">
      <Title>НОВОСТИ</Title>
      <div className="container">
        <NewsSlider />
      </div>
      <div className="section__footer">
        <SectionLink text="Посмотреть все новости" />
        <SectionLink text="Подписаться на новости" />
      </div>
    </section>
  );
}
