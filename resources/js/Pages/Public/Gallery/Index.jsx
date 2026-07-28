import { Head, Link } from "@inertiajs/react";
import { Image as ImageIcon } from "lucide-react";
import GalleryCard from "@/Components/Public/GalleryCard";

export default function Index({ galleries }) {
    return (
        <>
            <Head title="Galeri Dusun" />

            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-12">
                        <Link
                            href="/"
                            className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                        >
                            ← Kembali ke Beranda
                        </Link>

                        <span className="mt-2 block text-sm font-semibold uppercase tracking-widest text-emerald-600">
                            Dokumentasi
                        </span>

                        <h1 className="mt-3 text-4xl font-bold text-slate-900">
                            Galeri Dusun
                        </h1>

                        <p className="mt-4 max-w-2xl text-slate-600">
                            Kumpulan dokumentasi kegiatan, acara, dan potret
                            kehidupan masyarakat dusun.
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
                                Album akan muncul setelah ditambahkan oleh
                                admin.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {galleries.data.map((gallery) => (
                                    <GalleryCard
                                        key={gallery.id}
                                        gallery={gallery}
                                    />
                                ))}
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
                                            className={`rounded-lg px-4 py-2 text-sm transition ${
                                                link.active
                                                    ? "bg-emerald-600 text-white"
                                                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                                            } ${
                                                !link.url
                                                    ? "pointer-events-none opacity-50"
                                                    : ""
                                            }`}
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