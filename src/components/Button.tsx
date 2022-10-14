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
      className={clsx(
        'text-neutral-900 font-sans font-semibold py-4 px-3 rounded text-sm w-full bg-sky-300 hover:bg-sky-200 transition-colors focus:ring-2 ring-sky-100',
      )}
    >
      {children}
    </ComponentButton>
  )
}
