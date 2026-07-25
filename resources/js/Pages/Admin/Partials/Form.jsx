import Input from "@/Components/UI/Input";

export default function Form({
    data,
    setData,
    errors,
}) {
    return (
        <>
            <div>
                <label className="mb-2 block font-medium">
                    Judul
                </label>

                <Input
                    value={data.title}
                    onChange={(e) =>
                        setData("title", e.target.value)
                    }
                />

                {errors.title && (
                    <p className="text-sm text-red-500 mt-1">
                        {errors.title}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Ringkasan
                </label>

                <textarea
                    rows={3}
                    className="w-full rounded-lg border p-3"
                    value={data.excerpt}
                    onChange={(e) =>
                        setData("excerpt", e.target.value)
                    }
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Isi Berita
                </label>

                <textarea
                    rows={8}
                    className="w-full rounded-lg border p-3"
                    value={data.content}
                    onChange={(e) =>
                        setData("content", e.target.value)
                    }
                />
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Status
                </label>

                <select
                    className="w-full rounded-lg border p-3"
                    value={data.status}
                    onChange={(e) =>
                        setData("status", e.target.value)
                    }
                >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                </select>
            </div>
        </>
    );
}