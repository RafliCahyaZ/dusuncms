import { statistics } from "@/data/statistics";

export default function HighlightStats() {
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