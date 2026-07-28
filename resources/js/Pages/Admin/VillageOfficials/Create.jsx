import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import Form from "./Form";

export default function Create() {
    return (
        <AdminLayout>
            <Head title="Tambah Perangkat Dusun" />

            <div className="space-y-6">
                <h1 className="text-2xl font-bold">
                    Tambah Perangkat Dusun
                </h1>

                <Form
                    submitRoute={route("village-officials.store")}
                    submitLabel="Simpan"
                />
            </div>
        </AdminLayout>
    );
}