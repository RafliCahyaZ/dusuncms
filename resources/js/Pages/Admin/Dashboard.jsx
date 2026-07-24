import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard() {
    return (
        <AdminLayout>
            <div className="rounded-xl bg-white p-6 shadow">
                <h2 className="text-3xl font-bold">
                    Selamat Datang di DusunCMS
                </h2>

                <p className="mt-2 text-slate-600">
                    Dashboard sedang dalam pengembangan.
                </p>
            </div>
        </AdminLayout>
    );
}