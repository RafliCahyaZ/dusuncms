import { Link } from "@inertiajs/react";
import {
    LayoutDashboard,
    Newspaper,
    Image,
    FileText,
    Settings,
} from "lucide-react";

const menus = [
    { title: "Dashboard", href: "/", icon: LayoutDashboard },
    { title: "Berita", href: "#", icon: Newspaper },
    { title: "Galeri", href: "#", icon: Image },
    { title: "Dokumen", href: "#", icon: FileText },
    { title: "Pengaturan", href: "#", icon: Settings },
];

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white">
            <div className="border-b border-slate-700 p-6">
                <h1 className="text-xl font-bold">DusunCMS</h1>
            </div>

            <nav className="mt-4">
                {menus.map((menu) => {
                    const Icon = menu.icon;

                    return (
                        <Link
                            key={menu.title}
                            href={menu.href}
                            className="flex items-center gap-3 px-6 py-3 hover:bg-slate-800"
                        >
                            <Icon size={18} />
                            {menu.title}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}