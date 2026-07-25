import { Newspaper, User, Bell } from "lucide-react";

const activities = [
    {
        id: 1,
        title: "Berita berhasil ditambahkan",
        subtitle: "Kerja Bakti Dusun",
        time: "5 menit lalu",
        icon: Newspaper,
    },
    {
        id: 2,
        title: "Admin login",
        subtitle: "Administrator",
        time: "20 menit lalu",
        icon: User,
    },
    {
        id: 3,
        title: "Pengumuman dipublikasikan",
        subtitle: "Posyandu Agustus",
        time: "1 jam lalu",
        icon: Bell,
    },
];

export default function ActivityList() {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold">
                Aktivitas Terbaru
            </h2>

            <div className="space-y-4">
                {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                        <div
                            key={activity.id}
                            className="flex items-center gap-4"
                        >
                            <div className="rounded-full bg-green-100 p-3">
                                <Icon
                                    className="text-green-600"
                                    size={18}
                                />
                            </div>

                            <div className="flex-1">
                                <p className="font-medium">
                                    {activity.title}
                                </p>

                                <p className="text-sm text-gray-500">
                                    {activity.subtitle}
                                </p>
                            </div>

                            <span className="text-xs text-gray-400">
                                {activity.time}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}