import Sidebar from "@/Components/Common/Sidebar";
import Navbar from "@/Components/Common/Navbar";

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-100">
            <Sidebar />

            <div className="ml-64 min-h-screen">
                <Navbar />

                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}