export default function Button({
    children,
    variant = "primary",
    type = "button",
    className = "",
    ...props
}) {
    const variants = {
        primary:
            "bg-blue-600 hover:bg-blue-700 text-white",

        secondary:
            "bg-slate-200 hover:bg-slate-300 text-slate-800",

        success:
            "bg-green-600 hover:bg-green-700 text-white",

        warning:
            "bg-yellow-500 hover:bg-yellow-600 text-white",

        danger:
            "bg-red-600 hover:bg-red-700 text-white",

        outline:
            "border border-slate-300 bg-white hover:bg-slate-100 text-slate-700",
    };

    return (
        <button
            type={type}
            className={`
                inline-flex
                items-center
                justify-center
                rounded-lg
                px-4
                py-2
                font-medium
                transition
                duration-200
                ${variants[variant]}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}