import { usePage } from "@inertiajs/react";

export default function Footer() {
    const { setting } = usePage().props;

    const villageName = setting?.village_name || "DusunCMS";

    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-3">

                {/* Website */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900">
                        {villageName}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        Website resmi dusun yang menyediakan informasi,
                        berita, galeri, serta layanan informasi masyarakat.
                    </p>
                </div>

                {/* Kontak */}
                <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                        Kontak
                    </h3>

                    <div className="mt-3 space-y-2 text-sm text-slate-600">
                        {setting?.address && (
                            <p>{setting.address}</p>
                        )}

                        {setting?.phone && (
                            <p>📞 {setting.phone}</p>
                        )}

                        {setting?.email && (
                            <p>✉️ {setting.email}</p>
                        )}
                    </div>
                </div>

                {/* Media Sosial */}
                <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                        Media Sosial
                    </h3>

                    <div className="mt-3 flex flex-col gap-2 text-sm">

                        {setting?.facebook && (
                            <a
                                href={setting.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-emerald-600"
                            >
                                Facebook
                            </a>
                        )}

                        {setting?.instagram && (
                            <a
                                href={setting.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-emerald-600"
                            >
                                Instagram
                            </a>
                        )}

                        {setting?.youtube && (
                            <a
                                href={setting.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-emerald-600"
                            >
                                YouTube
                            </a>
                        )}

                    </div>
                </div>
            </div>

            <div className="border-t border-slate-200">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-slate-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} {villageName}. All rights
                        reserved.
                    </p>

                    <p>
                        Dibangun menggunakan Laravel 12, React & Inertia.js
                    </p>
                </div>
            </div>
        </footer>
    );
}