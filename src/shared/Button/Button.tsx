import clsx from "clsx"
import { forwardRef } from "react"
import type { ReactNode, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    rounded?: boolean
    gradient?: boolean
    size?: "small" | "regular" | "big"
    variant?: "primary" | "glass"
    startIcon?: ReactNode
    endIcon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            rounded,
            startIcon,
            endIcon,
            variant = "primary",
            size = "regular",
            gradient,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <button
                className={clsx(
                    "button",
                    gradient && "button--gradient",
                    rounded && "button--rounded",
                    `button--${size}`,
                    `button--${variant}`,
                    className
                )}
                ref={ref}
                {...props}
            >
                {startIcon && <div className={"button__icon button__icon--start"}>{startIcon}</div>}
                {children && <span className="button__content">{children}</span>}
                {endIcon && <div className={"button__icon button__icon--end"}>{endIcon}</div>}
            </button>
        )
    }
)
