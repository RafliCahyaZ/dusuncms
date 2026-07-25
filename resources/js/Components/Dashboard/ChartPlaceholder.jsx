import { BarChart3 } from "lucide-react";

export default function ChartPlaceholder() {
    return (
        <div className="flex h-72 flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300">
            <BarChart3
                size={60}
                className="mb-4 text-gray-400"
            />

            <h3 className="text-lg font-semibold">
                Grafik Belum Tersedia
            </h3>

            <p className="mt-2 text-sm text-gray-500">
                Grafik akan muncul ketika data statistik tersedia.
            </p>
        </div>
    );
}