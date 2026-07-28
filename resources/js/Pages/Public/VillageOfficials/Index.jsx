import { Head, usePage } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Index({ officials }) {
    const { setting } = usePage().props;

    return (
        <PublicLayout>
            <Head title="Perangkat Dusun" />

            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold">
                        Perangkat {setting?.village_name}
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Struktur organisasi dan perangkat dusun.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {officials.map((official) => (
                        <div
                            key={official.id}
                            className="overflow-hidden rounded-xl bg-white shadow"
                        >
                            <img
                                src={
                                    official.photo_url ??
                                    "https://placehold.co/600x400"
                                }
                                className="h-72 w-full object-cover"
                                alt={official.name}
                            />

                            <div className="p-6">
                                <h2 className="text-xl font-bold">
                                    {official.name}
                                </h2>

                                <p className="mt-1 text-green-700 font-medium">
                                    {official.position}
                                </p>

                                {official.bio && (
                                    <p className="mt-4 text-gray-600">
                                        {official.bio}
                                    </p>
                                )}

                                {official.phone && (
                                    <p className="mt-4 text-sm">
                                        📞 {official.phone}
                                    </p>
                                )}

                                {official.email && (
                                    <p className="text-sm">
                                        ✉ {official.email}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PublicLayout>
    );
}