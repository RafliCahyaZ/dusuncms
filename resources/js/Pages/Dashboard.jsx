import AdminLayout from "@/Layouts/AdminLayout";
import StatCard from "@/Components/Dashboard/StatCard";
import EmptyState from "@/Components/UI/EmptyState";
import Card from "@/Components/UI/Card";

import {
    Newspaper,
    Image,
    FileText,
    Users,
} from "lucide-react";

export default function Dashboard() {
    return (
        <AdminLayout>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                <p className="mt-1 text-slate-500">Ringkasan aktivitas DusunCMS</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <StatCard title="Berita" value="0" icon={Newspaper} />
                <StatCard title="Galeri" value="0" icon={Image} />
                <StatCard title="Dokumen" value="0" icon={FileText} />
                <StatCard title="Pengunjung" value="0" icon={Users} />
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-2">
                <Card className="p-6">
                    <h2 className="text-lg font-semibold text-slate-900">Aktivitas Terbaru</h2>
                    <div className="mt-4">
                        <EmptyState
                            title="Belum ada aktivitas"
                            description="Aktivitas terbaru akan muncul di sini."
                        />
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-lg font-semibold text-slate-900">Statistik</h2>
                    <div className="mt-4">
                        <EmptyState
                            title="Belum ada statistik"
                            description="Data statistik akan ditampilkan di sini."
                        />
                    </div>
                </Card>
            </div>
        </AdminLayout>
    );
}