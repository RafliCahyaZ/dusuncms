import { Head, Link } from "@inertiajs/react";
import { Image as ImageIcon } from "lucide-react";

export default function Index({ galleries }) {
    return (
        <>
            <Head title="Galeri Dusun" />

            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                            Dokumentasi
                        </span>

                        <h1 className="mt-3 text-4xl font-bold text-slate-900">
                            Galeri Dusun
                        </h1>

                        <p className="mt-4 text-slate-600">
                            Kumpulan dokumentasi kegiatan dan potret kehidupan
                            masyarakat dusun.
                        </p>
                    </div>

                    {galleries.data.length === 0 ? (
                        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
                            <ImageIcon
                                size={48}
                                className="mx-auto text-slate-400"
                            />

                            <h2 className="mt-4 text-xl font-semibold text-slate-700">
                                Belum Ada Album
                            </h2>

                            <p className="mt-2 text-slate-500">
                                Album akan muncul setelah ditambahkan oleh admin.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {galleries.data.map((gallery) => {
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
                                                <h2 className="line-clamp-1 text-lg font-bold text-slate-900">
                                                    {gallery.title}
                                                </h2>

                                                <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                                                    {gallery.description ||
                                                        "Tidak ada deskripsi."}
                                                </p>

                                                <div className="mt-4 flex items-center justify-between">
                                                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                                                        {gallery.images_count} Foto
                                                    </span>

                                                    <Link
                                                        href={`/galeri/${gallery.id}`}
                                                        className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                                                    >
                                                        Lihat Album →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {galleries.links.length > 3 && (
                                <div className="mt-12 flex flex-wrap justify-center gap-2">
                                    {galleries.links.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.url || "#"}
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                            className={`rounded-lg px-4 py-2 text-sm ${
                                                link.active
                                                    ? "bg-emerald-600 text-white"
                                                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                                            } ${!link.url ? "pointer-events-none opacity-50" : ""}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </>
    );
}