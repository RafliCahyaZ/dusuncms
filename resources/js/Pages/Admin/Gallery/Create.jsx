import AdminLayout from '@/Layouts/AdminLayout';
import Form from './Partials/Form';
import { Head, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('gallery.store'));
    };

    return (
        <AdminLayout>
            <Head title="Tambah Album" />

            <div className="space-y-6">

                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Tambah Album
                    </h1>

                    <p className="mt-1 text-sm text-gray-600">
                        Buat album terlebih dahulu, kemudian tambahkan foto pada halaman edit.
                    </p>
                </div>

                <div className="rounded-lg bg-white p-6 shadow">

                    <Form
                        data={data}
                        setData={setData}
                        errors={errors}
                        processing={processing}
                        submit={submit}
                        submitLabel="Simpan Album"
                    />

                </div>

            </div>
        </AdminLayout>
    );
}