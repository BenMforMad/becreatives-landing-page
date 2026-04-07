export function L1Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{ background: '#1a1815', borderColor: 'rgba(250, 247, 240, 0.06)' }}
    >
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="text-lg font-bold"
            style={{ color: '#FAF7F0', fontFamily: "'Cormorant Garamond', serif" }}
          >
            beCreatives
          </span>
          <span className="text-sm" style={{ color: 'rgba(250, 247, 240, 0.3)', fontFamily: "'Inter', sans-serif" }}>
            for Agencies
          </span>
        </div>

        <div className="flex items-center gap-6">
          {['Privacy', 'Terms', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm transition-colors duration-200 hover:opacity-80"
              style={{ color: 'rgba(250, 247, 240, 0.35)', fontFamily: "'Inter', sans-serif" }}
            >
              {link}
            </a>
          ))}
        </div>

        <p
          className="text-sm"
          style={{ color: 'rgba(250, 247, 240, 0.2)', fontFamily: "'Inter', sans-serif" }}
        >
          &copy; {new Date().getFullYear()} beCreatives. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
