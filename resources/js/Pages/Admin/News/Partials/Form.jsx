import Input from "@/Components/UI/Input";
import Textarea from "@/Components/UI/Textarea";
import Select from "@/Components/UI/Select";
import Button from "@/Components/UI/Button";

export default function Form({
    data,
    setData,
    errors,
    processing,
    submit,
    submitLabel = "Simpan",
}) {
    return (
        <form
            onSubmit={submit}
            className="space-y-6 rounded-xl bg-white p-6 shadow"
        >
            <div>
                <label className="mb-2 block font-medium">
                    Judul Berita
                </label>

                <Input
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    placeholder="Masukkan judul berita"
                />

                {errors.title && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.title}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Ringkasan
                </label>

                <Textarea
                    rows={3}
                    value={data.excerpt}
                    onChange={(e) => setData("excerpt", e.target.value)}
                    placeholder="Ringkasan singkat berita"
                />

                {errors.excerpt && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.excerpt}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Isi Berita
                </label>

                <Textarea
                    rows={10}
                    value={data.content}
                    onChange={(e) => setData("content", e.target.value)}
                    placeholder="Isi lengkap berita..."
                />

                {errors.content && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.content}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block font-medium">
                    Status
                </label>

                <Select
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                >
                    <option value="draft">
                        Draft
                    </option>

                    <option value="published">
                        Publish
                    </option>
                </Select>

                {errors.status && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.status}
                    </p>
                )}
            </div>

            <div className="flex justify-end">
                <Button
                    type="submit"
                    disabled={processing}
                >
                    {processing ? "Menyimpan..." : submitLabel}
                </Button>
            </div>
        </form>
    );
}