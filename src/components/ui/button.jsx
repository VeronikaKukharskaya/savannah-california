import React from "react"

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`rounded-xl px-4 py-2 transition-all duration-300 font-medium focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
