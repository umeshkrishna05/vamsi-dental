import { useEffect } from "react";
import "./ScrollReveal.css";

export default function ScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
          sec.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return null;
}
