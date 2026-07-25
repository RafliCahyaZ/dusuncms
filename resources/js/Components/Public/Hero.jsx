import { ArrowRight } from "lucide-react";
import { APP } from "@/constants/config";
import Button from "@/Components/UI/Button";

export default function Hero() {
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
                        {APP.village}
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        {APP.description}
                    </p>

                    <div className="mt-10 flex gap-4">
                        <button className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700">
                            Jelajahi Dusun
                        </button>

                        <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-100">
                            Berita Terbaru

                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex h-[420px] w-full max-w-md items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white shadow-sm">
                        <span className="text-slate-400">
                            Ilustrasi Dusun
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}