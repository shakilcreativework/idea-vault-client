"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

// reusable button component with support for
// variants, sizes, links, loading, icons, and animations
const BaseButton = ({
  children,
  text,
  className,

  // interaction & button behavior
  onClick,
  disabled = false,
  loading = false,
  type = "button",

  // render as button, internal link, or external link
  as = "button", // "button" | "link" | "a"
  href,

  // visual style options
  variant = "primary",
  size = "md", // sm | md | lg

  // optional left & right icons
  leftIcon,
  rightIcon,

  // optional animated background layers
  animated = false,
  animatedSpanOne,
  animatedSpanTwo,
}) => {
  // button style variants
  const variants = {
    primary:
      "bg-gradient-to-r from-orange-400 to-red-500 text-white",
    outline:
      "border border-orange-400 text-orange-500 hover:bg-orange-50",
    ghost:
      "text-gray-700 hover:bg-gray-100",
    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  // button size variants
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-full",
    md: "px-5 py-2.5 text-base rounded-full",
    lg: "px-6 py-3 text-lg rounded-full",
  };

  // merge base styles with selected variant, size, and custom classes
  const baseStyles = cn(
      "relative inline-flex items-center justify-center",
      "font-medium whitespace-nowrap overflow-hidden",
      "transition-all duration-300 ease-in-out",
      "transform hover:scale-105 active:scale-95",
      "gap-2.5",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      variants[variant],
      sizes[size],
      className
    );

  // optional animated background effect
  const animationLayer = animated && (
    <>
      <span
        className={cn(
          "absolute inset-0 rounded-full bg-orange-300 opacity-30 animate-bounce",
          animatedSpanOne
        )}
      />
      <span
        className={cn(
          "absolute inset-0 rounded-full bg-orange-400 opacity-20 blur-lg scale-110",
          animatedSpanTwo
        )}
      />
    </>
  );

  // reusable button content
  const content = (
    <>
      {animationLayer}

      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}

        {children || text}

        {!loading && rightIcon}
      </span>
    </>
  );

  // internal Next.js route
  if (as === "link" && href) {
    return (
      <Link href={href} className={baseStyles} onClick={onClick}>
        {content}
      </Link>
    );
  }

  // external link
  if (as === "a" && href) {
    return (
      <a
        href={href}
        className={baseStyles}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // standard button
  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      className={baseStyles}
    >
      {content}
    </button>
  );
};

export default BaseButton;