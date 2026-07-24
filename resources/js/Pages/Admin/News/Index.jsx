import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import Button from "@/Components/UI/Button";

export default function Index({ news }) {
    return (
        <AdminLayout>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">
                    Berita
                </h1>

                <Link href="/news/create">
                    <Button>
                        Tambah Berita
                    </Button>
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
                {news.length === 0 ? (
                    <p className="text-slate-500">
                        Belum ada berita.
                    </p>
                ) : (
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3">Judul</th>
                                <th className="text-left">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {news.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="py-3">
                                        {item.title}
                                    </td>

                                    <td>
                                        {item.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </AdminLayout>
    );
}