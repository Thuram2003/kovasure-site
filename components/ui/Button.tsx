"use client";

import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
  href?: string;
}

function Button({
  className = "",
  variant = "primary",
  size = "default",
  href,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-95";
  
  const variantStyles = {
    primary: "bg-[#0024ff] text-white hover:bg-blue-600 shadow-[0_4px_14px_0_rgba(0,36,255,0.35)] hover:shadow-[0_6px_20px_0_rgba(0,36,255,0.45)] border border-transparent",
    secondary: "bg-[#ffb41d] text-gray-900 hover:bg-[#ffb41d]/90 shadow-[0_4px_14px_0_rgba(255,180,29,0.35)] hover:shadow-[0_6px_20px_0_rgba(255,180,29,0.45)] border border-transparent",
    outline: "bg-white/80 backdrop-blur-sm border border-[#0024ff] text-[#0024ff] hover:bg-[#0024ff] hover:text-white shadow-[0_4px_12px_rgba(0,36,255,0.08)]",
    ghost: "bg-transparent text-[#0024ff] hover:bg-[#0024ff]/10",
  };
  
  const sizeStyles = {
    default: "px-6 py-3",
    sm: "px-4 py-2 text-xs",
    lg: "px-8 py-3.5 text-base",
    xl: "px-10 py-4 text-lg",
    icon: "p-3",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

export { Button };
export default Button;
