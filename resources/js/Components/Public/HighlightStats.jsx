import { Users, Home, Map, MapPinned } from "lucide-react";
import { usePage } from "@inertiajs/react";

export default function HighlightStats() {
    const { setting } = usePage().props;

    const statistics = [
        {
            title: "Penduduk",
            value: setting.population
                ? `${Number(setting.population).toLocaleString("id-ID")} Jiwa`
                : "-",
            icon: Users,
        },
        {
            title: "KK",
            value: setting.family_cards
                ? Number(setting.family_cards).toLocaleString("id-ID")
                : "-",
            icon: Home,
        },
        {
            title: "Luas Wilayah",
            value: setting.area_size || "-",
            icon: Map,
        },
        {
            title: "RT / RW",
            value:
                setting.rt_count || setting.rw_count
                    ? `${setting.rt_count ?? "-"} / ${setting.rw_count ?? "-"}`
                    : "-",
            icon: MapPinned,
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {statistics.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-3xl font-bold text-slate-900">
                                    {item.value}
                                </h3>

                                <p className="mt-2 text-sm text-slate-600">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}