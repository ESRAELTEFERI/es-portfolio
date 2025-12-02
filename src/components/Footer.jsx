import React from 'react'

export function Footer(){
  return (
    <footer className="border-t border-color-border mt-12">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© 2025 Esrael Teferi Tensay. All rights reserved.</div>
        <div className="mt-3 md:mt-0 flex gap-3">
          <a href="/cv.pdf" className="px-3 py-1 border rounded">Download CV</a>
          <a href="#" className="px-3 py-1 border rounded">Email</a>
          <a href="#" className="px-3 py-1 border rounded">GitHub</a>
          <a href="#" className="px-3 py-1 border rounded">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
