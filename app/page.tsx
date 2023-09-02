import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="page-wrapper">
      <Hero />
      <Products />
      <Services />
      <About />
    </main>
  );
}
