import Image from "next/image";
import styles from "./page.module.css";
import Welcome from "@/components/patterns/Welcome/Welcome";
import About from "@/components/patterns/About/Index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Welcome />
      <About />
    </main>
  );
}
