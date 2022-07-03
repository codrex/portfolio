import React, {useState} from 'react';
import { Menu } from '../icons/menu';
import { IconButton } from './icon-button';
import { NavDrawer } from "./nav-drawer"

interface NavProps {
  name: string;
  workAt: string;
  location: string;
}

export function Nav(props: NavProps) {
  const { name, workAt, location } = props;
  const [isOpen, setIsOpen] = useState(false)

  const toggleClick = () => setIsOpen((prev: boolean) => !prev )
console.log(isOpen)
  
  return (
    <header className="flex justify-between lg:gap-x-52 h-fit items-start mb-10">
      <ul className="flex justify-between list-none text-lg flex-1 font-semibold tracking-normal flex-wrap gap-2 pt-7">
        <li>{name}</li>
        <li >Works at {workAt}</li>
        <li>Based in {location}</li>
      </ul>
      <nav className="h-full justify-between items-center hidden lg:flex pt-7">
        <ul className="flex justify-between list-none text-lg	flex-1 font-semibold w-40 ">
          <li className="cursor-pointer ease-in-out border-b-4 hover:border-black border-transparent">
            Projects
          </li>
          <li className="cursor-pointer border-b-4 hover:border-black border-transparent ">
            Contact
          </li>
        </ul>
      </nav>

      <IconButton className="ml-4 lg:hidden z-50" onClick={toggleClick}>
        <Menu />
      </IconButton>

      <NavDrawer open={isOpen}/>
    </header>
  );
}
