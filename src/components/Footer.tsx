export function Footer() {
  return (
    <footer className="bg-brand-navy-light text-white/50 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-black font-display text-white tracking-tighter">
          be<span className="text-brand-accent">Creatives</span>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} beCreatives. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
