export function L2Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/10 py-10">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-display font-bold text-xl">beCreatives</span>
          <span className="text-white/30 text-sm">for Agencies</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">Contact</a>
        </div>
        <p className="text-xs text-white/25">
          &copy; {new Date().getFullYear()} beCreatives. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
