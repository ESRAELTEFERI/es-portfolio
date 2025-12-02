import React from "react";
import { motion as Motion } from "framer-motion";

const projects = [
  {
    title: "Sheqlee — Freelance-Company Platform",
    subtitle: "Internship Project — METNEE PLC",
    desc: "Built responsive UI components and implemented filtering and navigation for a freelancer-company connection platform.",
    tags: ["React", "JavaScript", "HTML/CSS"],
    image: "/src/assets/sheeqlee.png",
    code: "#",
  },
  {
    title: "Tigrigna Speech-to-Text AI",
    subtitle: "Final Year Project — Mekelle Institute of Technology",
    desc: "Developed a speech-to-text system for Tigrigna using ML and signal processing.",
    tags: ["Python", "Machine Learning", "AI"],
    image: "/src/assets/sheeqlee.png",
    code: "#",
  },
];

export function Projects() {
  return (
    <Motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      className="container py-8"
    >
      <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Motion.div
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 130, damping: 16 },
              },
            }}
            className="bg-card rounded-lg border overflow-hidden"
          >
            {/* <div className="flex flex-col md:flex-row"> */}
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="p-4 flex-1">
                <div className="text-sm text-muted">{p.subtitle}</div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm">{p.desc}</p>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <a href="#" className="px-3 py-1 border rounded">
                    Learn More
                  </a>
                  <a href={p.code} className="px-3 py-1 border rounded">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
}
