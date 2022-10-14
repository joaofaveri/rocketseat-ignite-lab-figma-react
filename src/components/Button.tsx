import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  asChild: boolean
}

export function Button({ children, asChild }: ButtonProps) {
  const ComponentButton = asChild ? Slot : 'button'
  return (
    <ComponentButton
      className={clsx('text-neutral-900 font-sans font-bold', )}
    >
      {children}
    </ComponentButton>
  )
}
