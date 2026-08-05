import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Categories } from "@/components/sections/categories";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Categories />
      <Contact />
    </>
  );
}
