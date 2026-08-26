import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Whoweare from "@/components/Whoweare";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex min-h-dvh flex-col mb-4">
        <Header />
        <Hero />
      </div>
      <div id="whoweare">
        <Whoweare />
      </div>
      <div id="servicos">
        <Services />
      </div>
    </main>
  );
}
