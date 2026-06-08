export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-gray-800/50">
      <div className="p-12 max-w-5xl mx-auto flex max-sm:flex-col max-sm:items-center max-sm:gap-y-4 flex-wrap justify-between">
        <span className="text-gray-400">
          <span className="primary-color font-bold">&lt;</span>
          Rishabh Singh
          <span className="primary-color font-bold">/&gt;</span>{" "}
          &copy; 2026
        </span>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            target="_blank"
            href="https://github.com/Rishabh775"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rishabh-singh-794171205/"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-gray-500 text-sm">Rishabh797604@gmail.com</p>
      </div>
    </footer>
  );
}