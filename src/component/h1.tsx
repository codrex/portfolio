import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadElement> {
    children: React.ReactNode
}

export function H1({children, className}: H1Props) {
 
  return (
    <h1 className={`text-8xl font-bold tracking-wide text-left ${className}`}>
    {children}
    </h1>
  );
}
