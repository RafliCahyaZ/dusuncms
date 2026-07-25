export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
                <p className="text-sm text-slate-500">
                    © 2026 DusunCMS. All rights reserved.
                </p>

                <p className="text-sm text-slate-500">
                    Dibangun menggunakan Laravel & React
                </p>
            </div>
        </footer>
    );
}