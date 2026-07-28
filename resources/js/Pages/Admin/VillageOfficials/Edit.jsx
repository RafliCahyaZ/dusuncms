import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import Form from "./Form";

export default function Edit({ official }) {
    return (
        <AdminLayout>
            <Head title="Edit Perangkat Dusun" />

            <div className="space-y-6">
                <h1 className="text-2xl font-bold">
                    Edit Perangkat Dusun
                </h1>

                <Form
                    official={official}
                    method="put"
                    submitRoute={route(
                        "village-officials.update",
                        official.id
                    )}
                    submitLabel="Perbarui"
                />
            </div>
        </AdminLayout>
    );
}