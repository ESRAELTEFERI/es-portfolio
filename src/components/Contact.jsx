import React from "react";
import { motion as Motion } from "framer-motion";

export function Contact() {
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
      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form className="bg-card p-6 rounded-lg border space-y-3">
          <label className="block">
            <div className="text-sm mb-1">Your Name</div>
            <input className="w-full rounded p-2 border" placeholder="Esrael" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Your Email</div>
            <input
              className="w-full rounded p-2 border"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Your Message</div>
            <textarea
              className="w-full rounded p-2 border"
              rows="5"
              placeholder="Tell me about your project"
            ></textarea>
          </label>
          <button type="submit" className="text-white px-4 py-2 rounded border">
            Send Message
          </button>
        </form>

        <div className="bg-card p-6 rounded-lg border">
          <div className="font-medium mb-2">Contact Information</div>
          <div className="text-sm mb-1">Email: teferiesrael21@gmail.com</div>
          <div className="text-sm mb-1">Phone: +251 977 504 633</div>
          <div className="text-sm">Location: Mekelle, Ethiopia</div>
          <div className="mt-4 flex gap-3">
            <a href="#" className="px-3 py-1 border rounded">
              LinkedIn
            </a>
            <a href="#" className="px-3 py-1 border rounded">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
