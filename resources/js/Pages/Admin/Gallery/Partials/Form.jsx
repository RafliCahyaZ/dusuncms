import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';
import TextInput from '@/Components/TextInput';

export default function Form({
    data,
    setData,
    errors,
    processing,
    submit,
    submitLabel = 'Simpan',
}) {
    return (
        <form onSubmit={submit} className="space-y-6">

            <div>
                <InputLabel
                    htmlFor="title"
                    value="Judul Album"
                />

                <TextInput
                    id="title"
                    className="mt-1 block w-full"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    autoComplete="off"
                    required
                />

                <InputError
                    className="mt-2"
                    message={errors.title}
                />
            </div>

            <div>
                <InputLabel
                    htmlFor="description"
                    value="Deskripsi"
                />

                <TextArea
                    id="description"
                    className="mt-1 block w-full"
                    rows={5}
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />

                <InputError
                    className="mt-2"
                    message={errors.description}
                />
            </div>

            <div className="flex justify-end">
                <PrimaryButton
                    disabled={processing}
                >
                    {submitLabel}
                </PrimaryButton>
            </div>

        </form>
    );
}