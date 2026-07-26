import { Image as ImageIcon } from "lucide-react";

export default function GallerySection({ galleries }) {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Dokumentasi
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Galeri Dusun
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Dokumentasi kegiatan dan potret kehidupan masyarakat
                        dusun.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleries.length === 0 ? (
                        <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
                            <ImageIcon
                                size={48}
                                className="mx-auto text-slate-400"
                            />

                            <h3 className="mt-4 text-lg font-semibold text-slate-700">
                                Belum Ada Album
                            </h3>

                            <p className="mt-2 text-slate-500">
                                Album galeri akan muncul setelah ditambahkan dari
                                Admin Panel.
                            </p>
                        </div>
                    ) : (
                        galleries.map((gallery) => {
                            const cover =
                                gallery.images.length > 0
                                    ? `/storage/${gallery.images[0].image}`
                                    : null;

                            return (
                                <div
                                    key={gallery.id}
                                    className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                                        {cover ? (
                                            <img
                                                src={cover}
                                                alt={gallery.title}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700">
                                                <ImageIcon
                                                    size={48}
                                                    className="text-white"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5">
                                        <h3 className="line-clamp-1 text-lg font-bold text-slate-900">
                                            {gallery.title}
                                        </h3>

                                        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                                            {gallery.description ||
                                                "Tidak ada deskripsi."}
                                        </p>

                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                                                {gallery.images_count} Foto
                                            </span>

                                            <button className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700">
                                                Lihat Album →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {galleries.length > 0 && (
                    <div className="mt-14 text-center">
                        <button className="rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-white">
                            Lihat Semua Galeri
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}