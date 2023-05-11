"use client"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  formAction?: () => void
  type: "button" | "submit" | "reset"
}

export default function Button({ children, onClick, ...other }: ButtonProps) {
  return <button {...other}>{children}</button>
}
