import * as React from 'react'

import { cn } from '@/lib/utils'

type InputProps = React.ComponentProps<'input'> & {
  icon?: React.ComponentType<React.ComponentProps<'svg'>>
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, icon: Icon, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex h-9 w-full min-w-0 items-center gap-3 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow]',
          'selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input',
          'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          'md:text-sm',
          `${disabled && `disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50`}`,
          className,
        )}
      >
        {Icon && (
          <Icon
            className={cn(
              'size-4 text-gray-500',
              `${disabled && 'text-gray-400'}`,
            )}
          />
        )}

        <input
          type={type}
          data-slot="input"
          ref={ref}
          className={cn(
            'file:text-foreground placeholder:text-muted-foreground outline-none',
            'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
          )}
          {...props}
        />
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
