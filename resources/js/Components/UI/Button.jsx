export default function Button({
    children,
    variant = "primary",
    type = "button",
    className = "",
    ...props
}) {
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
    };

    return (
        <button
            type={type}
            className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}