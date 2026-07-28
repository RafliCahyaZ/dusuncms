import { Head, Link } from "@inertiajs/react";
import { CalendarDays, ArrowLeft } from "lucide-react";

export default function Show({ news, latestNews }) {
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
        <>
            <Head title={news.title} />

            <section className="bg-slate-50 py-20">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">

                    <article className="lg:col-span-2 overflow-hidden rounded-3xl bg-white shadow-sm">

                        {image && (
                            <img
                                src={image}
                                alt={news.title}
                                className="h-[420px] w-full object-cover"
                            />
                        )}

                        <div className="p-8">

                            <Link
                                href="/berita"
                                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                            >
                                <ArrowLeft size={16} />
                                Kembali ke Berita
                            </Link>

                            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900">
                                {news.title}
                            </h1>

                            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <CalendarDays size={16} />
                                    {publishedDate}
                                </div>

                                {news.author && (
                                    <span>
                                        Oleh <strong>{news.author.name}</strong>
                                    </span>
                                )}
                            </div>

                            <div className="mt-8 whitespace-pre-line leading-8 text-slate-700">
                                {news.content}
                            </div>
                        </div>
                    </article>

                    <aside>
                        <div className="rounded-3xl bg-white p-6 shadow-sm">

                            <h2 className="text-xl font-bold text-slate-900">
                                Berita Terbaru
                            </h2>

                            <div className="mt-6 space-y-5">
                                {latestNews.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/berita/${item.slug}`}
                                        className="block rounded-xl border border-slate-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50"
                                    >
                                        <h3 className="font-semibold text-slate-800">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            {new Date(
                                                item.published_at
                                            ).toLocaleDateString("id-ID")}
                                        </p>
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </aside>

                </div>
            </section>
        </>
    );
}