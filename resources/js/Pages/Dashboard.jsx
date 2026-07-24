import AdminLayout from "@/Layouts/AdminLayout";
import StatCard from "@/Components/Dashboard/StatCard";
import EmptyState from "@/Components/UI/EmptyState";

import {
    Newspaper,
    Image,
    FileText,
    Users,
} from "lucide-react";

export default function Dashboard() {
    return (
        <AdminLayout>
            <h1 className="mb-6 text-3xl font-bold">
                Dashboard
            </h1>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <StatCard title="Berita" value="0" icon={Newspaper} />
                <StatCard title="Galeri" value="0" icon={Image} />
                <StatCard title="Dokumen" value="0" icon={FileText} />
                <StatCard title="Pengunjung" value="0" icon={Users} />
            </div>

            <div className="mt-8">
                <EmptyState
                    title="Belum ada aktivitas"
                    description="Aktivitas terbaru akan muncul di sini."
                />
            </div>
        </AdminLayout>
    );
}