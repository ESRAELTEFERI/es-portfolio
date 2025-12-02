import React from "react";
import { motion as Motion } from "framer-motion";

export function About() {
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
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="col-span-2">
          <p className="mb-4">
            I'm from Mekelle, Ethiopia and graduated with a BSc in Computer
            Science & Engineering (June 18, 2025). I enjoy building web
            applications and exploring AI solutions — focusing on clean code,
            usability, and real impact.
          </p>

          <div className="flex gap-6 mt-6">
            <div>
              <div className="text-3xl font-bold">1+</div>
              <div className="text-sm text-muted">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-muted">Projects Completed</div>
            </div>
          </div>
        </div>

        <aside className="bg-card p-4 rounded-lg border">
          <div className="mb-3 font-medium">Details</div>
          <div className="text-sm">
            <div>From: Mekelle, Ethiopia</div>
            <div>Degree: BSc — Computer Science & Engineering</div>
            <div>Graduation: June 18, 2025</div>
          </div>
        </aside>
      </div>
    </Motion.div>
  );
}
