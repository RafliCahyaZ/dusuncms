import {
    FileText,
    Users,
    Store,
    CalendarDays,
    Megaphone,
    ShieldCheck,
} from "lucide-react";

export const services = [
    {
        id: 1,
        title: "Administrasi Surat",
        description:
            "Pelayanan pembuatan surat pengantar, surat domisili, surat keterangan usaha, dan administrasi lainnya.",
        icon: FileText,
    },
    {
        id: 2,
        title: "Data Penduduk",
        description:
            "Pendataan penduduk secara digital untuk mendukung pelayanan yang lebih cepat dan akurat.",
        icon: Users,
    },
    {
        id: 3,
        title: "UMKM Dusun",
        description:
            "Informasi dan promosi pelaku usaha mikro serta produk unggulan masyarakat dusun.",
        icon: Store,
    },
    {
        id: 4,
        title: "Agenda Kegiatan",
        description:
            "Jadwal kegiatan masyarakat, kerja bakti, musyawarah, dan acara desa lainnya.",
        icon: CalendarDays,
    },
    {
        id: 5,
        title: "Informasi Dusun",
        description:
            "Pusat informasi mengenai pengumuman, berita terbaru, dan program pembangunan dusun.",
        icon: Megaphone,
    },
    {
        id: 6,
        title: "Pengaduan Warga",
        description:
            "Media bagi masyarakat untuk menyampaikan kritik, saran, maupun laporan kepada pemerintah dusun.",
        icon: ShieldCheck,
    },
];