export default function Input({
    className = "",
    ...props
}) {
    return (
        <input
            className={`
                w-full
                rounded-lg
                border
                border-slate-300
                px-4
                py-2
                focus:border-blue-500
                focus:outline-none
                focus:ring-2
                focus:ring-blue-200
                ${className}
            `}
            {...props}
        />
    );
}