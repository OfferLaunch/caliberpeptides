import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-foreground rounded-full font-body font-medium transition-all duration-200",
    {
        variants: {
            variant: {
                default: "bg-sage/10 hover:bg-sage/20 border-sage/30 text-sage",
                solid: "bg-sage hover:bg-sage/90 text-white border-sage hover:border-sage transition-all duration-200",
                outline: "border-sage/50 bg-transparent hover:bg-sage/10 text-sage hover:border-sage",
                ghost: "border-transparent bg-transparent hover:border-sage/50 hover:bg-sage/5 text-sage",
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
