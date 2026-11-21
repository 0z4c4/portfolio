import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import HomePreview from "../components/HomePreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <HomePreview />
    </main>
  );
}
