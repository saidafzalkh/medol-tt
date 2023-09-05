import ServicesSlider from "../sliders/ServicesSlider";
import Title from "../Title";

export default function Services() {
  return (
    <section className="section services">
      <Title>УСЛУГИ</Title>

      <div className="services__wrapper">
        <div className="container">
          <ServicesSlider />
        </div>
      </div>
    </section>
  );
}
