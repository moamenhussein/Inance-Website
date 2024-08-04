import Image from "next/image";
import styles from "./page.module.css";
import Landing from "@/Components/Landing";
import Boxes from "@/Components/Boxes";
import About from "@/Components/About";
import HomeServices from "@/Components/HomeServices";
import Services from "@/Components/Services";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <>
      <Landing />
      <Boxes />
      <About />
      <HomeServices />
      <Services />
      <Contact />
    </>
  );
}
