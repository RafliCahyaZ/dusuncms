import { Image as ImageIcon } from "lucide-react";

const gallery = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
];

export default function GallerySection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Dokumentasi
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Galeri Dusun
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Dokumentasi kegiatan dan potret kehidupan masyarakat dusun.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {gallery.map((item) => (
                        <div
                            key={item.id}
                            className="group flex aspect-[4/3] cursor-pointer items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="text-center text-white">
                                <ImageIcon
                                    size={42}
                                    className="mx-auto transition group-hover:scale-110"
                                />

                                <p className="mt-4 font-semibold">
                                    Foto Kegiatan
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-14 text-center">
                    <button className="rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-white">
                        Lihat Semua Galeri
                    </button>
                </div>

            </div>
        </section>
    );
}