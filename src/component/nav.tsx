import React from "react";

export function Nav() {
  return (
    <header className="flex justify-between">
      <ul className="flex justify-between list-none">
        <li>Name</li>
        <li>Currently work at</li>
        <li>Based in Location</li>
      </ul>
      <nav>
        <ul className="flex justify-between list-none">
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
