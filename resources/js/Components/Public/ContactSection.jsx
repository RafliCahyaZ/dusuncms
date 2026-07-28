import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";
import { usePage } from "@inertiajs/react";

export default function ContactSection() {
    const { setting } = usePage().props;

    return (
        <section
            id="contact"
            className="bg-emerald-700 py-24 text-white"
        >
            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
                {/* Kiri */}
                <div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-200">
                        Hubungi Kami
                    </span>

                    <h2 className="mt-4 text-4xl font-bold">
                        Pemerintah {setting?.village_name ?? "Dusun"}
                    </h2>

                    <p className="mt-6 max-w-xl leading-relaxed text-emerald-100">
                        Kami siap memberikan pelayanan terbaik kepada masyarakat.
                        Silakan datang langsung ke kantor dusun atau hubungi kami
                        melalui informasi berikut.
                    </p>

                    {setting?.maps_embed && (
                        <div
                            className="mt-8 overflow-hidden rounded-2xl shadow-lg"
                            dangerouslySetInnerHTML={{
                                __html: setting.maps_embed,
                            }}
                        />
                    )}
                </div>

                {/* Kanan */}
                <div className="space-y-6">

                    <div className="flex gap-4 rounded-2xl bg-white/10 p-5">
                        <MapPin className="mt-1 shrink-0" />

                        <div>
                            <h3 className="font-semibold">
                                Alamat
                            </h3>

                            <p className="whitespace-pre-line text-emerald-100">
                                {setting?.address ??
                                    "Alamat belum tersedia."}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 rounded-2xl bg-white/10 p-5">
                        <Phone className="mt-1 shrink-0" />

                        <div>
                            <h3 className="font-semibold">
                                Telepon
                            </h3>

                            <p className="text-emerald-100">
                                {setting?.phone ??
                                    "-"}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 rounded-2xl bg-white/10 p-5">
                        <Mail className="mt-1 shrink-0" />

                        <div>
                            <h3 className="font-semibold">
                                Email
                            </h3>

                            <p className="text-emerald-100">
                                {setting?.email ??
                                    "-"}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 rounded-2xl bg-white/10 p-5">
                        <Clock className="mt-1 shrink-0" />

                        <div>
                            <h3 className="font-semibold">
                                Jam Pelayanan
                            </h3>

                            <p className="text-emerald-100">
                                Senin - Jumat
                            </p>

                            <p className="text-emerald-100">
                                08.00 - 15.00 WIB
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}