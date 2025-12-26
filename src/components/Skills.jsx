import React from "react";
import { motion as Motion } from "framer-motion";

const tech = {
  Frontend: [
    "React",
    "Angular",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
  ],
  "Backend & APIs": ["Node.js", "REST APIs", "Firebase"],
  Programming: ["JavaScript", "TypeScript", "Python", "C", "C++", "Java"],
  Databases: ["MySQL", "Firebase Realtime Database"],
  "Tools & Workflow": [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "npm",
    "Chrome DevTools",
  ],
};

export function Skills() {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120 },
      }}
      className="container py-8"
    >
      <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(tech).map(([category, items]) => (
          <div key={category} className="bg-card p-4 rounded-lg border">
            <div className="font-medium mb-3">{category}</div>

            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-1 rounded bg-accent text-accent-foreground text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Motion.div>
  );
}
