import { Link, usePage } from "@inertiajs/react";
import {
    LayoutDashboard,
    Newspaper,
    Image,
    Users,
    FileText,
    Settings,
    LogOut,
} from "lucide-react";

const menus = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Berita",
        href: "/news",
        icon: Newspaper,
    },
    {
        title: "Galeri",
        href: "/gallery",
        icon: Image,
    },
    {
        title: "Perangkat Dusun",
        href: "/village-officials",
        icon: Users,
    },
    {
        title: "Dokumen",
        href: "#",
        icon: FileText,
    },
    {
        title: "Website Settings",
        href: "/website-settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    const { url } = usePage();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-slate-950 text-white">
            <div className="border-b border-slate-800 px-6 py-5">
                <h1 className="text-xl font-bold tracking-wide">
                    DusunCMS
                </h1>

                <p className="mt-1 text-xs text-slate-400">
                    Admin Panel
                </p>
            </div>

            <nav className="mt-4 space-y-1 px-3">
                {menus.map((menu) => {
                    const Icon = menu.icon;

                    const active =
                        url === menu.href ||
                        url.startsWith(menu.href + "/");

                    return (
                        <Link
                            key={menu.title}
                            href={menu.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                                active
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`}
                        >
                            <Icon size={18} />
                            {menu.title}
                        </Link>
                    );
                })}
            </nav>

            <div className="absolute bottom-0 left-0 w-full border-t border-slate-800 p-3">
                <Link
                    href="/logout"
                    method="post"
                    as="button"
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                    <LogOut size={18} />
                    Logout
                </Link>
            </div>
        </aside>
    );
}