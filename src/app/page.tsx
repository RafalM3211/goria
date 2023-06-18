import Image from "next/image";
import Welcome from "@/components/patterns/Welcome/Welcome";
import About from "@/components/patterns/About/Index";
import Shows from "@/components/patterns/Shows/Index";

export default function Home() {
  return (
    <main>
      <Welcome />
      <About />
      <Shows />
    </main>
  );
}
