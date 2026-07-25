import ChartPlaceholder from "./ChartPlaceholder";

export default function ChartCard() {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
                Statistik Pengunjung
            </h2>

            <ChartPlaceholder />
        </div>
    );
}