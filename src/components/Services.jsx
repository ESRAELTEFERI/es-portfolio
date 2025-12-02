import React from "react";
import { motion as Motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    items: ["React apps", "Responsive design", "Performance"],
  },
  {
    title: "AI Project Support",
    items: ["ML prototypes", "NLP", "Speech processing"],
  },
  {
    title: "Frontend Development",
    items: ["UI/UX", "Components", "Cross-browser"],
  },
  {
    title: "Consultation",
    items: ["Tech selection", "Planning", "Best practices"],
  },
];

export function Services() {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 110 },
      }}
      className="container py-8"
    >
      <h2 className="text-2xl font-semibold mb-6">Services</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s.title} className="bg-card p-4 rounded-lg border">
            <div className="font-medium mb-2">{s.title}</div>
            <ul className="text-sm list-disc list-inside">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Motion.div>
  );
}
