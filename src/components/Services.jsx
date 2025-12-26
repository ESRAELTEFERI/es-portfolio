import React from "react";
import { motion as Motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    items: [
      "Build scalable React applications with reusable components",
      "Design fully responsive interfaces for mobile and desktop",
      "Optimize performance and load times for real users",
    ],
  },
  {
    title: "AI Project Support",
    items: [
      "Prototype machine learning models for real-world problems",
      "Implement natural language processing solutions",
      "Develop speech recognition and signal processing systems",
    ],
  },
  {
    title: "Frontend Development",
    items: [
      "Craft clean and intuitive UI/UX for web applications",
      "Develop modular, maintainable frontend components",
      "Ensure cross-browser and cross-device compatibility",
    ],
  },
  {
    title: "Consultation",
    items: [
      "Advise on tech stack selection and architecture decisions",
      "Plan projects for efficiency and scalability",
      "Share best practices and coding standards",
    ],
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
      <h2 className="text-2xl font-semibold mb-6 text-primary">Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Motion.div
            key={s.title}
            // whileHover={{ y: -5, scale: 1.02 }}
            className="bg-card p-5  border "
          >
            <div className="font-semibold text-lg mb-3">{s.title}</div>
            <ul className="text-sm list-disc list-inside space-y-1">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
}
