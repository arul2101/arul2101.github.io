import { useLayoutEffect } from "react";
import Hero from "../../components/hero/Hero";
import About from "../about/About";
import Contact from "../contact/Contact";

export default function Home() {
  useLayoutEffect(() => {
    document.title = "Sidiq Yanuar | Home";
  })

  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  )
}
