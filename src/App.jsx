import React, { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const v = localStorage.getItem("theme");
    return (
      v === "dark" ||
      (!v &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 backdrop-blur-sm bg-background/60 border-b border-color-border z-40">
        <div className="container flex items-center justify-between py-4">
          <a href="#hero" className="font-semibold text-lg text-primary">
            Esrael Teferi
          </a>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <button
              onClick={() => setIsDark((d) => !d)}
              className="ml-4 px-3 py-1 rounded-lg border"
              aria-label="Toggle theme"
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsDark((d) => !d)}
              className="px-2 py-1 border rounded"
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </header>

      <main className="space-y-24 py-12">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
