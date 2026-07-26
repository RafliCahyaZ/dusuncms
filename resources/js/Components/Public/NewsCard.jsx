import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function NewsCard({ news }) {
    const image = news.thumbnail
        ? `/storage/${news.thumbnail}`
        : null;

    const publishedDate = news.published_at
        ? new Date(news.published_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
          })
        : "-";

    return (
        <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-52 overflow-hidden bg-slate-100">
                {image ? (
                    <img
                        src={image}
                        alt={news.title}
                        className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 text-lg font-semibold text-white">
                        Tidak Ada Gambar
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays size={16} />

                    {publishedDate}
                </div>

                <h3 className="mt-4 line-clamp-2 text-xl font-bold text-slate-900">
                    {news.title}
                </h3>

                <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                    {news.excerpt}
                </p>

                <Link
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:gap-3"
                >
                    Baca Selengkapnya

                    <ArrowRight size={18} />
                </Link>
            </div>
        </article>
    );
}