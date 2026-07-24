export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-100">
            <h1 className="text-2xl font-bold p-6">
                DusunCMS Admin
            </h1>

            <main className="p-6">
                {children}
            </main>
        </div>
    );
}