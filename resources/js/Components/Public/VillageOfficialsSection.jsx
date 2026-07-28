import { Link } from "@inertiajs/react";

export default function VillageOfficialsSection({
    officials,
}) {
    if (!officials?.length) return null;

    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Perangkat Dusun
                        </h2>

                        <p className="mt-2 text-slate-500">
                            Struktur perangkat dusun yang
                            siap melayani masyarakat.
                        </p>
                    </div>

                    <Link
                        href={route(
                            "public.village-officials.index"
                        )}
                        className="rounded-lg border px-4 py-2 transition hover:bg-slate-900 hover:text-white"
                    >
                        Lihat Semua
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {officials.map((official) => (
                        <div
                            key={official.id}
                            className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <img
                                src={
                                    official.photo_url ??
                                    "https://placehold.co/400x500"
                                }
                                alt={official.name}
                                className="h-72 w-full object-cover"
                            />

                            <div className="p-5 text-center">
                                <h3 className="text-lg font-bold">
                                    {official.name}
                                </h3>

                                <p className="mt-1 text-sm text-green-700">
                                    {official.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}