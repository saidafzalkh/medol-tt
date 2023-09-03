import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import Partners from "@/components/sections/Partners";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="page-wrapper">
      <Hero />
      <Products />
      <Services />
      <About />
      <News />
      <Partners />
      <Footer />
    </main>
  );
}
