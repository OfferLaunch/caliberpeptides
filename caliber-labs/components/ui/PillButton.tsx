import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-foreground rounded-full font-body font-medium transition-all duration-200",
    {
        variants: {
            variant: {
                default: "bg-navy/10 hover:bg-navy/20 border-navy/30 text-navy",
                solid: "bg-navy hover:bg-navy/90 text-white border-navy hover:border-navy transition-all duration-200",
                outline: "border-navy/50 bg-transparent hover:bg-navy/10 text-navy hover:border-navy",
                ghost: "border-transparent bg-transparent hover:border-navy/50 hover:bg-navy/5 text-navy",
            },
            size: {
                sm: "px-4 py-1.5 text-xs",
                default: "px-6 py-2 text-sm",
                lg: "px-8 py-2.5 text-base",
            },
        },
        defaultVariants: {
            variant: "solid",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const PillButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
)

PillButton.displayName = 'PillButton';

export { PillButton, buttonVariants };
