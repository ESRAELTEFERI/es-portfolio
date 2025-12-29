import React from "react";
import { motion as Motion } from "framer-motion";
import esraelPhoto from "../assets/esrael_photo.jpg";

const container = {
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export function Hero() {
  return (
    <Motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="container grid md:grid-cols-2 gap-0 items-start py-6 md:py-10"
    >
      <Motion.div variants={item}>
        <p className="text-sm text-muted mb-1">Hi, I'm</p>
        <h1 className="text-4xl font-semibold mb-2 text-primary">
          Esrael Teferi
        </h1>

        <p className="text-lg mb-4 max-w-xl">
          I'm a software engineer from Ethiopia with experience building
          production-style web applications using React and Angular. I enjoy
          turning designs into clean, responsive interfaces and building real
          products that people use. I build modern web apps and intelligent
          systems that solve real problems.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="text-white px-4 py-2 rounded-lg border bg-primary text-primary-foreground"
          >
            View My Work
          </a>
          <a
            href="Esrael_teferi_Resume.pdf"
            download
            className="px-4 py-2 rounded-lg border"
          >
            Download CV
          </a>
          <a href="#contact" className="px-4 py-2 rounded-lg border">
            Get In Touch
          </a>
        </div>
      </Motion.div>

      <Motion.div
        variants={item}
        className="flex justify-center md:justify-end"
      >
        <div
          className="w-52 h-60 md:w-64 md:h-80 rounded-2xl overflow-hidden border"
          style={{ background: "var(--color-card)" }}
        >
          <img
            src={esraelPhoto}
            alt="Esrael"
            className="object-cover w-full h-full"
          />
        </div>
      </Motion.div>
    </Motion.div>
  );
}
