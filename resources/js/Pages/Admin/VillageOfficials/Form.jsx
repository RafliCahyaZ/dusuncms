import { useForm } from "@inertiajs/react";

export default function Form({
    official = null,
    submitRoute,
    method = "post",
    submitLabel,
}) {
    const { data, setData, post, processing, errors } = useForm({
        photo: null,
        name: official?.name ?? "",
        position: official?.position ?? "",
        bio: official?.bio ?? "",
        phone: official?.phone ?? "",
        email: official?.email ?? "",
        sort_order: official?.sort_order ?? 1,
        is_active: official?.is_active ?? true,
        _method: method,
    });

    function submit(e) {
        e.preventDefault();

        post(submitRoute, {
            forceFormData: true,
        });
    }

    return (
        <form
            onSubmit={submit}
            className="space-y-6 rounded-xl bg-white p-6 shadow"
        >
            <div>
                <label className="mb-2 block font-medium">
                    Foto
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        setData("photo", e.target.files[0])
                    }
                />

                {official?.photo_url && (
                    <img
                        src={official.photo_url}
                        className="mt-3 h-28 rounded-lg object-cover"
                    />
                )}

                {errors.photo && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.photo}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Nama
                </label>

                <input
                    type="text"
                    className="w-full rounded-lg border p-3"
                    value={data.name}
                    onChange={(e) =>
                        setData("name", e.target.value)
                    }
                />

                {errors.name && (
                    <p className="text-sm text-red-600">
                        {errors.name}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Jabatan
                </label>

                <input
                    type="text"
                    className="w-full rounded-lg border p-3"
                    value={data.position}
                    onChange={(e) =>
                        setData(
                            "position",
                            e.target.value
                        )
                    }
                />

                {errors.position && (
                    <p className="text-sm text-red-600">
                        {errors.position}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Bio
                </label>

                <textarea
                    rows="5"
                    className="w-full rounded-lg border p-3"
                    value={data.bio}
                    onChange={(e) =>
                        setData("bio", e.target.value)
                    }
                />

                {errors.bio && (
                    <p className="text-sm text-red-600">
                        {errors.bio}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="mb-2 block font-medium">
                        Telepon
                    </label>

                    <input
                        type="text"
                        className="w-full rounded-lg border p-3"
                        value={data.phone}
                        onChange={(e) =>
                            setData(
                                "phone",
                                e.target.value
                            )
                        }
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        className="w-full rounded-lg border p-3"
                        value={data.email}
                        onChange={(e) =>
                            setData(
                                "email",
                                e.target.value
                            )
                        }
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="mb-2 block font-medium">
                        Urutan
                    </label>

                    <input
                        type="number"
                        className="w-full rounded-lg border p-3"
                        value={data.sort_order}
                        onChange={(e) =>
                            setData(
                                "sort_order",
                                e.target.value
                            )
                        }
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Status
                    </label>

                    <select
                        className="w-full rounded-lg border p-3"
                        value={data.is_active ? 1 : 0}
                        onChange={(e) =>
                            setData(
                                "is_active",
                                e.target.value == 1
                            )
                        }
                    >
                        <option value={1}>
                            Aktif
                        </option>

                        <option value={0}>
                            Nonaktif
                        </option>
                    </select>
                </div>
            </div>

            <button
                disabled={processing}
                className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700 disabled:opacity-50"
            >
                {submitLabel}
            </button>
        </form>
    );
}