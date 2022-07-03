import React from 'react';
import { Portal } from 'react-portal';

interface NavDrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
}

export function NavDrawer({ open, className="", ...props }: NavDrawerProps) {
  const openClassName = open ? 'translate-x-0' : 'translate-x-full';
  return (
    <Portal>
      <nav
        {...props}
        className={`justify-between items-center flex pt-7 fixed w-full h-full top-0 bottom-0 bg-white transition-transform duration-300 lg:hidden ${openClassName} ${className}`}
      >
        <ul className="flex list-none flex-1 font-semibold w-40 flex-col text-4xl gap-6 items-center">
          <li className="cursor-pointer ease-in-out border-b-4 hover:border-black border-transparent w-fit">
            Projects
          </li>
          <li className="cursor-pointer border-b-4 hover:border-black border-transparent w-fit">
            Contact
          </li>
        </ul>
      </nav>
    </Portal>
  );
}
