import { ArrowRight } from "lucide-react";
import { usePage } from "@inertiajs/react";

export default function Hero() {
    const { setting } = usePage().props;

    return (
        <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid items-center gap-16 lg:grid-cols-2">
                <div>
                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                        🌿 Website Resmi Dusun
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
                        Selamat Datang di
                        <br />
                        {setting?.village_name ?? "Nama Dusun"}
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        {setting?.head_greeting ??
                            "Selamat datang di website resmi dusun kami."}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#about"
                            className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
                        >
                            Jelajahi Dusun
                        </a>

                        <a
                            href="#news"
                            className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-100"
                        >
                            Berita Terbaru

                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    {setting?.hero_image_url ? (
                        <img
                            src={setting.hero_image_url}
                            alt={setting.village_name}
                            className="h-[420px] w-full max-w-xl rounded-3xl object-cover shadow-xl"
                        />
                    ) : (
                        <div className="flex h-[420px] w-full max-w-xl items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white shadow-sm">
                            <span className="text-slate-400">
                                Hero Image Belum Diatur
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}