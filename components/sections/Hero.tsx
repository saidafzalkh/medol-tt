import Header from "@/components/Header";

import HeroSlider from "../sliders/HeroSlider";

export default function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="container">
        <HeroSlider />
      </div>
    </section>
  );
}
