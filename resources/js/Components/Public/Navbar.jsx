import { Link } from "@inertiajs/react";
import { Menu } from "lucide-react";

import Button from "@/Components/UI/Button";
import { navigation } from "@/data/navigation";
import { APP } from "@/constants/config";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 font-bold text-white">
                        D
                    </div>

                    <div>
                        <h1 className="font-bold text-slate-900">
                            {APP.name}
                        </h1>

                        <p className="text-xs text-slate-500">
                            {APP.tagline}
                        </p>
                    </div>
                </Link>

                {/* Menu */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="transition hover:text-emerald-600"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Login */}
                <div className="flex items-center gap-3">
                    <Button
                        href="/login"
                        className="hidden md:inline-flex"
                    >
                        Login Admin
                    </Button>

                    <button className="rounded-xl p-2 hover:bg-slate-100 md:hidden">
                        <Menu size={22} />
                    </button>
                </div>
            </div>
        </header>
    );
}