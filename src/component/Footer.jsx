export default function Footer() {
  return (
    <div className="bg-black ">
      <div className="p-12 w-5/6 flex flex-wrap justify-between mx-auto">
        <span className="text-gray-300">Copyright © Rishabh Singh 2024</span>
        <div className="flex flex-wrap gap-3 items-center ">
          <a target="_blank" href="https://github.com/Rishabh775">
            <img
              className="w-8 cursor-pointer hover:scale-110"
              src="/github.png"
              alt="github"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rishabh-singh-794171205/"
          >
            <img
              className="w-9 cursor-pointer hover:scale-110"
              src="/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
        <p className="text-gray-300">Rishabh797604@gmail.com</p>
      </div>
    </div>
  );
}
