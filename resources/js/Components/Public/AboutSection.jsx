import { usePage } from "@inertiajs/react";

export default function AboutSection() {
    const { setting } = usePage().props;

    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            <div className="grid items-center gap-16 lg:grid-cols-2">
                {/* Kiri */}
                <div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Tentang Dusun
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Mengenal{" "}
                        {setting?.village_name ?? "Dusun"} Lebih Dekat
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600 whitespace-pre-line">
                        {setting?.history ??
                            "Sejarah dusun belum tersedia."}
                    </p>
                </div>

                {/* Kanan */}
                <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-10 text-white shadow-xl">
                    <h3 className="text-2xl font-bold">
                        Visi Dusun
                    </h3>

                    <p className="mt-6 leading-8 text-emerald-100 whitespace-pre-line">
                        {setting?.vision ??
                            "Visi dusun belum tersedia."}
                    </p>

                    <hr className="my-8 border-emerald-400" />

                    <h3 className="text-2xl font-bold">
                        Misi Dusun
                    </h3>

                    <p className="mt-6 leading-8 text-emerald-100 whitespace-pre-line">
                        {setting?.mission ??
                            "Misi dusun belum tersedia."}
                    </p>
                </div>
            </div>
        </section>
    );
}