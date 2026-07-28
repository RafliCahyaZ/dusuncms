import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import {
    Newspaper,
    Image,
    Users,
    FileText,
} from "lucide-react";

export default function Dashboard({ stats }) {
    const cards = [
        {
            title: "Berita",
            value: stats.news,
            icon: Newspaper,
            color: "bg-blue-500",
        },
        {
            title: "Galeri",
            value: stats.gallery,
            icon: Image,
            color: "bg-green-500",
        },
        {
            title: "Perangkat Dusun",
            value: stats.officials,
            icon: Users,
            color: "bg-purple-500",
        },
        {
            title: "Dokumen",
            value: stats.documents,
            icon: FileText,
            color: "bg-orange-500",
        },
    ];

    return (
        <AdminLayout>
            <Head title="Dashboard" />

            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold">
                        Dashboard
                    </h1>

                    <p className="mt-2 text-slate-600">
                        Selamat datang di DusunCMS.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={card.title}
                                className="rounded-xl bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-slate-500">
                                            {card.title}
                                        </p>

                                        <h2 className="mt-2 text-4xl font-bold">
                                            {card.value}
                                        </h2>
                                    </div>

                                    <div
                                        className={`rounded-xl p-4 text-white ${card.color}`}
                                    >
                                        <Icon size={28} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">
                        Ringkasan Sistem
                    </h2>

                    <p className="mt-3 text-slate-600">
                        Gunakan menu di sebelah kiri untuk
                        mengelola berita, galeri, perangkat
                        dusun, serta pengaturan website.
                    </p>
                </div>
            </div>
        </AdminLayout>
    );
}