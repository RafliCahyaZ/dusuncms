import { services } from "@/data/services";

export default function ServicesSection() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Layanan
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Layanan Dusun
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Berbagai layanan yang disediakan pemerintah dusun untuk
                        membantu kebutuhan administrasi dan informasi masyarakat.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                                    <Icon size={28} />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="mt-3 leading-relaxed text-slate-600">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}