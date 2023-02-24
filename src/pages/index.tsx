import Head from "next/head";
import { Inter } from "@next/font/google";

import { Intro } from "components/intro/Intro";
import Skills from "components/skills/Skills";
import Projects from "components/projects/Projects";
import Contact from "components/contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
