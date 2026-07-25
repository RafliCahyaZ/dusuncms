import { Link } from "@inertiajs/react";

export default function Button({
    children,
    variant = "primary",
    type = "button",
    href,
    className = "",
    ...props
}) {
    const variants = {
        primary:
            "bg-emerald-600 text-white hover:bg-emerald-700",

        secondary:
            "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",

        outline:
            "border border-emerald-600 text-emerald-600 hover:bg-emerald-50",

        ghost:
            "text-emerald-600 hover:bg-emerald-50",

        danger:
            "bg-red-600 text-white hover:bg-red-700",
    };

    const classes = `
        inline-flex items-center justify-center
        rounded-xl
        px-5 py-2.5
        text-sm font-medium
        transition duration-200
        ${variants[variant]}
        ${className}
    `;

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            {...props}
        >
            {children}
        </button>
    );
}