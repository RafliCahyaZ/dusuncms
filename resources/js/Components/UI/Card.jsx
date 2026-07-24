export default function Card({
    children,
    className = "",
}) {
    return (
        <div
            className={`rounded-xl bg-white shadow-sm border border-slate-200 ${className}`}
        >
            {children}
        </div>
    );
}