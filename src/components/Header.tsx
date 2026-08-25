export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-sage px-14 py-[22px] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <span className="text-[30px] font-bold tracking-[1px] text-ink">
        AnouDev
      </span>
      <nav className="flex gap-10 text-[21px]">
        <a href="#about" className="text-ink hover:text-accent">
          About
        </a>
        <a href="#projects" className="text-ink hover:text-accent">
          Projects
        </a>
        <a href="#skills" className="text-ink hover:text-accent">
          Skills
        </a>
        <a href="#contact" className="text-accent hover:text-ink">
          Leave a Message!
        </a>
      </nav>
    </header>
  );
}