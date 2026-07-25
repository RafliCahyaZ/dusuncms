export default function AboutSection() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid items-center gap-16 lg:grid-cols-2">
                <div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                        Tentang Dusun
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Mengenal Dusun Lebih Dekat
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600">
                        Dusun merupakan pusat kegiatan masyarakat yang memiliki
                        potensi di bidang pertanian, UMKM, budaya, serta
                        pariwisata lokal. Website ini hadir sebagai media
                        informasi resmi yang transparan dan mudah diakses oleh
                        seluruh warga.
                    </p>

                    <p className="mt-4 leading-8 text-slate-600">
                        Melalui DusunCMS, masyarakat dapat memperoleh informasi
                        terbaru mengenai berita, kegiatan, pengumuman, serta
                        pelayanan secara cepat.
                    </p>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-10 text-white shadow-xl">
                    <h3 className="text-2xl font-bold">
                        Visi Dusun
                    </h3>

                    <p className="mt-6 leading-8 text-emerald-100">
                        Menjadi dusun yang maju, transparan, mandiri, dan
                        berbasis teknologi informasi demi meningkatkan kualitas
                        pelayanan kepada masyarakat.
                    </p>
                </div>
            </div>
        </section>
    );
}