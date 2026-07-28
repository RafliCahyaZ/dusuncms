import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function Show({ gallery, latestGalleries }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <Head title={gallery.title} />

            <section className="bg-slate-50 py-20">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">

                    <article className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-sm">

                        <Link
                            href="/galeri"
                            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
                        >
                            <ArrowLeft size={16} />
                            Kembali ke Galeri
                        </Link>

                        <h1 className="mt-5 text-4xl font-bold text-slate-900">
                            {gallery.title}
                        </h1>

                        <p className="mt-4 whitespace-pre-line text-slate-600 leading-8">
                            {gallery.description || "Tidak ada deskripsi."}
                        </p>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {gallery.images.length === 0 ? (
                                <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                                    <ImageIcon
                                        size={48}
                                        className="mx-auto text-slate-400"
                                    />

                                    <p className="mt-4 text-slate-500">
                                        Belum ada foto pada album ini.
                                    </p>
                                </div>
                            ) : (
                                gallery.images.map((image) => (
                                    <button
                                        key={image.id}
                                        type="button"
                                        onClick={() =>
                                            setSelectedImage(
                                                `/storage/${image.image}`
                                            )
                                        }
                                        className="overflow-hidden rounded-2xl"
                                    >
                                        <img
                                            src={`/storage/${image.image}`}
                                            alt={gallery.title}
                                            className="aspect-square w-full object-cover transition duration-300 hover:scale-105"
                                        />
                                    </button>
                                ))
                            )}
                        </div>

                    </article>

                    <aside>

                        <div className="rounded-3xl bg-white p-6 shadow-sm">

                            <h2 className="text-xl font-bold text-slate-900">
                                Album Lainnya
                            </h2>

                            <div className="mt-6 space-y-4">
                                {latestGalleries.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/galeri/${item.id}`}
                                        className="block rounded-xl border border-slate-200 p-4 transition hover:border-emerald-500 hover:bg-emerald-50"
                                    >
                                        <h3 className="font-semibold text-slate-800">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            {item.images_count} Foto
                                        </p>
                                    </Link>
                                ))}
                            </div>

                        </div>

                    </aside>

                </div>
            </section>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Preview"
                        className="max-h-[90vh] max-w-[90vw] rounded-2xl"
                    />
                </div>
            )}
        </>
    );
}