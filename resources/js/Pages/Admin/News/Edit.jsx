import { Head, useForm } from "@inertiajs/react";
import Form from "./Partials/Form";

export default function Edit({ news }) {
    const {
        data,
        setData,
        put,
        processing,
        errors,
    } = useForm({
        title: news.title ?? "",
        excerpt: news.excerpt ?? "",
        content: news.content ?? "",
        status: news.status ?? "draft",
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("news.update", news.id));
    };

    return (
        <>
            <Head title="Edit Berita" />

            <div className="mx-auto max-w-5xl p-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold">
                        Edit Berita
                    </h1>

                    <p className="mt-2 text-slate-600">
                        Perbarui informasi berita.
                    </p>
                </div>

                <Form
                    data={data}
                    setData={setData}
                    errors={errors}
                    processing={processing}
                    submit={submit}
                    submitLabel="Perbarui Berita"
                />
            </div>
        </>
    );
}