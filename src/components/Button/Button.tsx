import React from 'react'
import './Button.css'

type ButtonProps = {
  label: string
}

const Button = ({ label }: ButtonProps) => (
  <button className="button">{label}</button>
)

export default Button
