import PartnersCard from "../cards/PartnersCard";
import PartnersSlider from "../sliders/PartnersSlider";
import Title from "../Title";

export default function Partners() {
  return (
    <section className="section partners">
      <Title>ПАРТНЕРЫ</Title>

      <div className="container partners__container">
        <PartnersSlider />
      </div>
    </section>
  );
}
