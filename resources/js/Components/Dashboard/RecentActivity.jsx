const logs = [
    "Admin login",
    "Berita diperbarui",
    "Komentar baru",
    "Pengaturan website diubah",
];

export default function RecentActivity() {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
                Log Aktivitas
            </h2>

            <ul className="space-y-3">
                {logs.map((log, index) => (
                    <li
                        key={index}
                        className="border-l-4 border-green-600 pl-4"
                    >
                        {log}
                    </li>
                ))}
            </ul>
        </div>
    );
}