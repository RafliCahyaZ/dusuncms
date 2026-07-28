import { Link } from "@inertiajs/react";
import NewsCard from "./NewsCard";

export default function NewsSection({ news }) {
    return (
        <section
            id="news"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                            Berita
                        </span>

                        <h2 className="mt-3 text-4xl font-bold text-slate-900">
                            Berita Terbaru
                        </h2>

                        <p className="mt-4 max-w-2xl text-slate-600">
                            Ikuti informasi terbaru mengenai kegiatan,
                            pengumuman, dan perkembangan di dusun.
                        </p>
                    </div>

                    <Link
                        href="/berita"
                        className="rounded-xl border border-emerald-600 px-6 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
                    >
                        Lihat Semua Berita
                    </Link>
                </div>

                {news.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                        <h3 className="text-xl font-semibold text-slate-700">
                            Belum Ada Berita
                        </h3>

                        <p className="mt-3 text-slate-500">
                            Berita akan muncul setelah dipublikasikan oleh admin.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {news.map((item) => (
                            <NewsCard
                                key={item.id}
                                news={item}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}