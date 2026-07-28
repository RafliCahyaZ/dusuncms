import { Link } from "@inertiajs/react";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryCard({ gallery }) {
    const cover =
        gallery.images.length > 0
            ? `/storage/${gallery.images[0].image}`
            : null;

    return (
        <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
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
                    {gallery.description || "Tidak ada deskripsi."}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                        {gallery.images_count} Foto
                    </span>

                    <Link
                        href={`/galeri/${gallery.id}`}
                        className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                    >
                        Lihat Album →
                    </Link>
                </div>
            </div>
        </div>
    );
}