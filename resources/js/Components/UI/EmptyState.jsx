import { Inbox } from "lucide-react";

export default function EmptyState({
    title = "Belum ada data",
    description = "Silakan tambahkan data baru.",
}) {
    return (
        <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white p-10 text-center">
            <Inbox
                className="mx-auto mb-4 text-slate-400"
                size={48}
            />

            <h3 className="text-lg font-semibold">
                {title}
            </h3>

            <p className="mt-2 text-slate-500">
                {description}
            </p>
        </div>
    );
}