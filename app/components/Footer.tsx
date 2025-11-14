export default function Footer() {
  return (
    <footer className="w-full border-t mt-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-500 flex justify-between flex-col sm:flex-row gap-2">
        <span>© {new Date().getFullYear()} RainClean Service Ltd.</span>
        <span>Professional domestic & commercial cleaning across the UK.</span>
      </div>
    </footer>
  );
}
