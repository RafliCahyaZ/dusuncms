import NewsCard from "./NewsCard";

export default function NewsSection({
    news,
}) {
    return (
        <section
            id="news"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-8 lg:grid-cols-3">
                    {news.map((item) => (
                        <NewsCard
                            key={item.id}
                            news={item}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}