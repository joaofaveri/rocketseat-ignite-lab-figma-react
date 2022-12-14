import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild: boolean
}

export function Text({ size = 'md', children, asChild }: TextProps) {
  const ComponentText = asChild ? Slot : 'span'
  return (
    <ComponentText
      className={clsx('text-zinc-300 font-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </ComponentText>
  )
}
