import AdminLayout from "@/Layouts/AdminLayout";
import Button from "@/Components/UI/Button";
import Form from "./Partials/Form";

import { useForm } from "@inertiajs/react";

export default function Edit({ news }) {

    const { data, setData, put, processing, errors } = useForm(news);

    function submit(e) {
        e.preventDefault();
        put(`/news/${news.id}`);
    }

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-6">
                Edit Berita
            </h1>

            <form
                onSubmit={submit}
                className="space-y-4 bg-white rounded-xl shadow p-6"
            >
                <Form
                    data={data}
                    setData={setData}
                    errors={errors}
                />

                <Button
                    type="submit"
                    disabled={processing}
                >
                    Simpan Perubahan
                </Button>
            </form>
        </AdminLayout>
    );
}