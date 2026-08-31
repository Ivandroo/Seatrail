import Commitment from "@/components/Commitment";
import Focus from "@/components/Focus";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Husbandry from "@/components/Husbandry";
import Services from "@/components/Services";
import Whoweare from "@/components/Whoweare";
import Whyseatrail from "@/components/Whyseatrail";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex min-h-dvh flex-col mb-4">
        <Hero />
      </div>
      <div id="whoweare">
        <Whoweare />
      </div>
      <div id="servicos">
        <Services />
      </div>
      <div className="flex flex-col w-full gap-8 justify-between sm:grid sm:grid-cols-2 md:grid-cols-3">
        <Commitment />
        <Whyseatrail />
        <Focus />
      </div>
      <div id="husbandry">
        <Husbandry />
      </div>
    </main>
  );
}
