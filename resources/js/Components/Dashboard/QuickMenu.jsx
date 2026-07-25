import { Link } from "@inertiajs/react";
import {
    Newspaper,
    Users,
    Settings,
    Globe,
} from "lucide-react";

const menus = [
    {
        title: "Tambah Berita",
        description: "Buat berita baru",
        href: "/news/create",
        icon: Newspaper,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Kelola Pengguna",
        description: "Manajemen akun",
        href: "/users",
        icon: Users,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Pengaturan",
        description: "Konfigurasi website",
        href: "/settings",
        icon: Settings,
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Lihat Website",
        description: "Halaman publik",
        href: "/",
        icon: Globe,
        color: "bg-purple-100 text-purple-600",
    },
];

export default function QuickMenu() {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
                Quick Menu
            </h2>

            <div className="grid grid-cols-2 gap-4">
                {menus.map((menu) => {
                    const Icon = menu.icon;

                    return (
                        <Link
                            key={menu.title}
                            href={menu.href}
                            className="rounded-lg border p-4 transition hover:border-green-500 hover:shadow-md"
                        >
                            <div
                                className={`mb-3 inline-flex rounded-lg p-3 ${menu.color}`}
                            >
                                <Icon size={22} />
                            </div>

                            <h3 className="font-semibold">
                                {menu.title}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                {menu.description}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}