import { nanoid } from "nanoid";

export default function NavDesktop(props) {
    return (
      <header className="hidden md:flex gap-14 items-center px-14 py-12">
        <img src="/logo.svg" alt="room-logo" />
        <nav className="flex gap-6">
          {props.Navlinks.map((link) => (
            <ul
              key={nanoid()}
              className="group flex flex-col gap-2 translate-y-[5px]"
            >
              <li className="text-white font-semibold cursor-pointer">
                {link.title}
              </li>
              <li className="w-[60%] h-[2px] bg-white mx-auto scale-0 group-hover:scale-100 transition-all" />
            </ul>
          ))}
        </nav>
      </header>
    );
  }