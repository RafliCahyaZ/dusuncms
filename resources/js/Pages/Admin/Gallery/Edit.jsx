import AdminLayout from '@/Layouts/AdminLayout';
import Form from './Partials/Form';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import InputError from '@/Components/InputError';

export default function Edit({ gallery }) {
    /*
    |--------------------------------------------------------------------------
    | Form Album
    |--------------------------------------------------------------------------
    */

    const {
        data,
        setData,
        put,
        processing,
        errors,
    } = useForm({
        title: gallery.title ?? '',
        description: gallery.description ?? '',
    });

    const submit = (e) => {
        e.preventDefault();

        put(route('gallery.update', gallery.id));
    };

    /*
    |--------------------------------------------------------------------------
    | Upload Images
    |--------------------------------------------------------------------------
    */

    const [images, setImages] = useState([]);
    const [preview, setPreview] = useState([]);

    const upload = () => {
        router.post(
            route('gallery.images.store', gallery.id),
            {
                images,
            },
            {
                forceFormData: true,
                preserveScroll: true,
            }
        );
    };

    const handleFiles = (e) => {
        const files = Array.from(e.target.files);

        setImages(files);

        setPreview(
            files.map((file) => ({
                name: file.name,
                url: URL.createObjectURL(file),
            }))
        );
    };

    return (
        <AdminLayout>
            <Head title="Edit Album" />

            <div className="space-y-8">

                {/* Header */}

                <div>
                    <h1 className="text-2xl font-bold">
                        Edit Album
                    </h1>

                    <p className="text-sm text-gray-600 mt-1">
                        Kelola informasi album dan foto.
                    </p>
                </div>

                {/* Form Album */}

                <div className="bg-white rounded-lg shadow p-6">

                    <Form
                        data={data}
                        setData={setData}
                        errors={errors}
                        processing={processing}
                        submit={submit}
                        submitLabel="Simpan Perubahan"
                    />

                </div>

                {/* Upload */}

                <div className="bg-white rounded-lg shadow p-6 space-y-5">

                    <div>
                        <h2 className="text-lg font-semibold">
                            Tambah Foto
                        </h2>

                        <p className="text-sm text-gray-500">
                            Anda dapat memilih beberapa gambar sekaligus.
                        </p>
                    </div>

                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFiles}
                    />

                    <InputError
                        message={errors.images}
                    />

                    {preview.length > 0 && (

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

                            {preview.map((item, index) => (

                                <div
                                    key={index}
                                    className="border rounded-lg overflow-hidden"
                                >

                                    <img
                                        src={item.url}
                                        alt={item.name}
                                        className="w-full h-32 object-cover"
                                    />

                                    <div className="text-xs p-2 truncate">
                                        {item.name}
                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                    <PrimaryButton
                        type="button"
                        onClick={upload}
                    >
                        Upload Foto
                    </PrimaryButton>

                </div>

                {/* Existing Images */}

                <div className="bg-white rounded-lg shadow p-6">

                    <div className="flex items-center justify-between mb-6">

                        <h2 className="text-lg font-semibold">
                            Foto Dalam Album
                        </h2>

                        <span className="text-sm text-gray-500">
                            {gallery.images.length} Foto
                        </span>

                    </div>

                    {gallery.images.length === 0 ? (

                        <div className="text-center py-10 text-gray-500">
                            Belum ada foto.
                        </div>

                    ) : (

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">

                            {gallery.images.map((image) => (

                                <div
                                    key={image.id}
                                    className="border rounded-lg overflow-hidden"
                                >

                                    <img
                                        src={`/storage/${image.image}`}
                                        className="w-full h-44 object-cover"
                                        alt=""
                                    />

                                    <div className="p-3">

                                        <SecondaryButton
                                            className="w-full justify-center"
                                            onClick={() => {

                                                if (!confirm('Hapus foto ini?')) {
                                                    return;
                                                }

                                                router.delete(
                                                    route(
                                                        'gallery.images.destroy',
                                                        image.id
                                                    ),
                                                    {
                                                        preserveScroll: true,
                                                    }
                                                );
                                            }}
                                        >
                                            Hapus
                                        </SecondaryButton>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>
        </AdminLayout>
    );
}