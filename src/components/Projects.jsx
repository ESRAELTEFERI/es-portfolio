import React from "react";
import { motion as Motion } from "framer-motion";

const projects = [
  {
    title: "Sheeqle — Freelance & Company Platform",
    subtitle: "Frontend Developer — METNEE PLC (Internship)",
    desc: "Built the complete frontend for a multi-role freelance marketplace with responsive layouts, routing, and reusable components.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    image: "/src/assets/sheeqlee.png",
    code: "https://github.com/ESRAELTEFERI/sheqlee-main",
    demo: null,
  },
  {
    title: "HRMS — Human Resource Management System",
    subtitle: "Frontend Project (Angular)",
    desc: "Developed HR admin and payroll modules including dashboards, forms, and role-based workflows.",
    tags: ["Angular", "TypeScript", "HTML", "CSS"],
    image: "/src/assets/hrms.jpg",
    code: null,
    demo: null,
  },
  {
    title: "Food Delivery Web App",
    subtitle: "Frontend Project (React)",
    desc: "Built a responsive food delivery interface with modern UI patterns and component-based architecture.",
    tags: ["React", "JavaScript", "CSS"],
    image: "/src/assets/foodDelivery.png",
    code: "https://github.com/ESRAELTEFERI/FoodDelivery",
    demo: null,
  },
  {
    title: "Full-Stack Todo Application (TickTock Tasks)",
    subtitle: "Full-Stack Project (Angular + Node.js)",
    desc: "Developed a full-stack task management app with REST APIs, CRUD operations, and basic authentication.",
    tags: ["Angular", "Node.js", "REST API"],
    image: "/src/assets/TickTock.png",
    code: "https://github.com/ESRAELTEFERI/TickTock-Tasks",
    demo: null,
  },
  {
    title: "Tigrigna Speech-to-Text System",
    subtitle: "Final Year Project — Mekelle University",
    desc: "Developed a speech-to-text system for the Tigrigna language using machine learning and signal processing techniques.",
    tags: ["Python", "Machine Learning", "AI"],
    image: "/src/assets/stt.png",
    code: null,
    demo: null,
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
            <div className="flex flex-col">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-auto object-cover"
              />

              <div className="p-4">
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
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      className="px-3 py-1 border rounded"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      className="px-3 py-1 border rounded"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
}
