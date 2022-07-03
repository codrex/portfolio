import React from "react";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export function IconButton({children, className, ...props}: IconButtonProps) {
  return (
      <button className={`p-7 ${className}`} {...props}>
    {children}
    </button>
  );
}
