export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
            <div>
                <h2 className="text-lg font-semibold text-slate-900">Dashboard</h2>
                <p className="text-sm text-slate-500">Selamat datang di DusunCMS</p>
            </div>

            <div className="flex items-center gap-3">
                <div className="rounded-full bg-slate-200 px-3 py-2 text-sm font-medium text-slate-700">
                    Admin
                </div>
            </div>
        </header>
    );
}