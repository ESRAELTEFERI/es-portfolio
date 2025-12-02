import React from "react";
import { motion as Motion } from "framer-motion";

const tech = {
  Programming: ["C/C++", "Python", "Java", "JavaScript", "TypeScript"],
  Web: ["HTML", "CSS", "React.js"],
  Database: ["MySQL", "Firebase Realtime DB"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
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
      <div className="grid md:grid-cols-4 gap-4">
        {Object.entries(tech).map(([k, v]) => (
          <div key={k} className="bg-card p-4 rounded-lg border">
            <div className="font-medium mb-2">{k}</div>
            <ul className="text-sm space-y-1">
              {v.map((x) => (
                <li
                  key={x}
                  className="inline-block mr-2 px-2 py-1 rounded bg-accent text-accent-foreground text-xs"
                >
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Motion.div>
  );
}
