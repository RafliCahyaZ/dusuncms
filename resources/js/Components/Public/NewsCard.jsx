import { CalendarDays, ArrowRight } from "lucide-react";

export default function NewsCard({ news }) {
    return (
        <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-52 items-center justify-center bg-gradient-to-br from-emerald-500 to-emerald-700 text-lg font-semibold text-white">
                Gambar Berita
            </div>

            <div className="p-6">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {news.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {news.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays size={16} />
                    {news.date}
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                    {news.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-emerald-600 transition hover:gap-3">
                    Baca Selengkapnya
                    <ArrowRight size={18} />
                </button>
            </div>
        </article>
    );
}