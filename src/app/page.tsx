import Image from "next/image";
import Welcome from "@/components/patterns/Welcome/Welcome";
import About from "@/components/patterns/About/Index";

export default function Home() {
  return (
    <main>
      <Welcome />
      <About />
    </main>
  );
}
