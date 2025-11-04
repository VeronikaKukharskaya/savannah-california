import React from "react"

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-xl border border-gray-700 bg-black/30 text-white px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-all ${className}`}
      {...props}
    />
  )
}
