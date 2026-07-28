import { Link } from "@inertiajs/react";
import { Image as ImageIcon } from "lucide-react";
import GalleryCard from "./GalleryCard";

export default function GallerySection({ galleries }) {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                            Dokumentasi
                        </span>

                        <h2 className="mt-3 text-4xl font-bold text-slate-900">
                            Galeri Dusun
                        </h2>

                        <p className="mt-4 max-w-2xl text-slate-600">
                            Dokumentasi kegiatan dan potret kehidupan masyarakat
                            dusun.
                        </p>
                    </div>

                    <Link
                        href="/galeri"
                        className="rounded-xl border border-emerald-600 px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
                    >
                        Lihat Semua Galeri
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                        galleries.map((gallery) => (
                            <GalleryCard
                                key={gallery.id}
                                gallery={gallery}
                            />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}