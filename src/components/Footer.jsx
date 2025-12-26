import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-color-border mt-12">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">
          © 2025 Esrael Teferi Tensay. All rights reserved.
        </div>
        <div className="mt-3 md:mt-0 flex gap-3">
          <a
            href="Esrael_teferi_Resume.pdf"
            // target="_blank"
            // rel="noopener noreferrer"
            download
            className="px-3 py-1 border rounded"
          >
            Download CV
          </a>
          {/* <a
            href="mailto:teferiesrael21@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 border rounded"
          >
            Email
          </a> */}
          <a
            href="https://github.com/ESRAELTEFERI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 border rounded"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/esrael-teferi-tensay-76988539b"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 border rounded"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
