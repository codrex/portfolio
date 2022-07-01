import React from "react";

interface NavProps {
  name: string;
  workAt: string;
  location: string;
}

export function Nav(props: NavProps) {
  const {name, workAt, location} = props
  return (
    <header className="flex justify-between lg:gap-x-52 h-20 items-center min-h-[70px]">
      <ul className="flex justify-between list-none text-lg flex-1 font-semibold tracking-normal">
        <li>{name}</li>
        <li className="hidden md:list-item">Works at {workAt}</li>
        <li className="hidden md:list-item">Based in {location}</li>
      </ul>
      <nav className="h-full justify-between items-center hidden lg:flex">
        <ul className="flex justify-between list-none text-lg	flex-1 font-semibold w-40 ">
          <li className="cursor-pointer ease-in-out border-b-4 hover:border-black border-transparent">Projects</li>
          <li className="cursor-pointer border-b-4 hover:border-black border-transparent ">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
