import React from "react"

export function Card({ className = "", children }) {
  return (
    <div className={`rounded-3xl shadow-lg overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}
