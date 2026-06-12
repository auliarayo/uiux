import Image from "next/image";
import {
  Target,
  Lightbulb,
  Route,
} from "lucide-react";

export default function Home() {
  const FIGMA_EMPATHIZE =
    "https://embed.figma.com/design/XDtmAClnp78T55CHlFkhuU/Prototype-nav.io---UI-UX-Design?node-id=0-1&embed-host=share";

  const FIGMA_PROTOTYPE =
    "https://embed.figma.com/design/XDtmAClnp78T55CHlFkhuU/Prototype-nav.io---UI-UX-Design?node-id=6-1383&embed-host=share";

  const FIGMA_CRAZY8 =
    "https://embed.figma.com/design/pH9JUMYGmsrUlNi0YYznD4/Ideate-nav.io---UI-UX-Design?node-id=0-1&embed-host=share";

  const FIGMA_LOFI =
    "https://embed.figma.com/design/pH9JUMYGmsrUlNi0YYznD4/Ideate-nav.io---UI-UX-Design?node-id=6-1383&embed-host=share";

  const FIGMA_USERFLOW =
    "https://embed.figma.com/design/pH9JUMYGmsrUlNi0YYznD4/Ideate-nav.io---UI-UX-Design?node-id=50-3697&embed-host=share";

  const FIGMA_DESIGNSYSTEM =
    "https://embed.figma.com/design/XDtmAClnp78T55CHlFkhuU/Prototype-nav.io---UI-UX-Design?node-id=50-3697&embed-host=share";

  return (
    <main className="bg-[#F8F8F4] text-stone-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200">

        <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">

            {/* LOGO */}
            <Image
              src="/logo.png"
              alt="nav.io"
              width={40}
              height={40}
            />

            <span className="text-2xl font-bold text-[#214B3E]">
              nav.io
            </span>

          </div>

          <div className="hidden md:flex gap-10 text-sm font-medium text-stone-600">

            <a href="#empathize" className="hover:text-[#214B3E]">
              Empathize
            </a>

            <a href="#define" className="hover:text-[#214B3E]">
              Define
            </a>

            <a href="#ideate" className="hover:text-[#214B3E]">
              Ideate
            </a>

            <a href="#prototype" className="hover:text-[#214B3E]">
              Prototype
            </a>

            <a href="#test" className="hover:text-[#214B3E]">
              Test
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* Background Blur */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-[120px] opacity-60" />

        <div className="absolute right-0 top-10 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-[120px] opacity-60" />

        <div className="max-w-[1400px] mx-auto px-8 py-24">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex px-4 py-2 rounded-full bg-green-50 border border-green-200 text-[#214B3E] text-sm font-medium">
                Mobility Application Case Study
              </span>

              <div className="flex items-center gap-5 mt-8">

                <Image
                  src="/logo.png"
                  alt="nav.io"
                  width={90}
                  height={90}
                />

                <h1 className="text-7xl md:text-8xl font-black tracking-tight text-[#214B3E]">
                  nav.io
                </h1>

              </div>

              <h2 className="mt-8 text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
                Membantu pengguna menemukan perjalanan terbaik dengan cepat dan mudah.
              </h2>

              <p className="mt-8 text-lg text-stone-600 max-w-xl leading-relaxed">
                Solusi mobilitas modern yang membantu pengguna memperoleh layanan perjalanan sesuai kebutuhan dan preferensi mereka melalui pengalaman digital yang sederhana, cepat, dan intuitif.
              </p>

              <div className="flex gap-4 mt-10 flex-wrap">

                <a
                  href="YOUR_FIGMA_PROTOTYPE_LINK"
                  target="_blank"
                  className="px-7 py-4 rounded-2xl bg-[#214B3E] text-white font-medium hover:bg-[#17392B] transition"
                >
                  Coba Prototype
                </a>

                <a
                  href="YOUR_FULL_PROJECT_LINK"
                  target="_blank"
                  className="px-7 py-4 rounded-2xl border border-stone-300 bg-white font-medium"
                >
                  Proyek Seluruhnya
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative flex justify-center">

              <div className="absolute w-[450px] h-[450px] bg-green-100 rounded-full blur-[100px]" />

              <div className="relative flex items-center gap-4">

                <Image
                  src="/mockup1.png"
                  alt="Mockup 1"
                  width={220}
                  height={450}
                  className="rounded-[32px] rotate-[-8deg] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                />

                <Image
                  src="/mockup2.png"
                  alt="Mockup 2"
                  width={250}
                  height={520}
                  className="rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.2)]"
                />

                <Image
                  src="/mockup3.png"
                  alt="Mockup 3"
                  width={220}
                  height={450}
                  className="rounded-[32px] rotate-[8deg] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="pb-32">

        <div className="max-w-[1400px] mx-auto px-8">

          <div className="mb-12">

            <span className="text-[#214B3E] uppercase tracking-[0.2em] text-sm font-medium">
              Overview
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Tentang Proyek
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-16">

            <div>

              <p className="text-lg text-stone-600 leading-relaxed">
                nav.io merupakan aplikasi mobilitas yang dirancang untuk membantu pengguna memperoleh layanan perjalanan yang sesuai dengan kebutuhan dan preferensi mereka.
              </p>

              <p className="text-lg text-stone-600 leading-relaxed mt-6">
                Proyek ini dikembangkan menggunakan pendekatan Design Thinking untuk memastikan solusi yang dihasilkan benar-benar berpusat pada pengguna melalui tahapan riset, identifikasi masalah, eksplorasi ide, pembuatan prototype, dan pengujian.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white rounded-[28px] border border-stone-200 p-6">

                <p className="text-sm text-stone-500">
                  Role
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  UI/UX Designer
                </h3>

              </div>

              <div className="bg-white rounded-[28px] border border-stone-200 p-6">

                <p className="text-sm text-stone-500">
                  Method
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Design Thinking
                </h3>

              </div>

              <div className="bg-white rounded-[28px] border border-stone-200 p-6">

                <p className="text-sm text-stone-500">
                  Duration
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  4 Weeks
                </h3>

              </div>

              <div className="bg-white rounded-[28px] border border-stone-200 p-6">

                <p className="text-sm text-stone-500">
                  Tools
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Figma
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EMPATHIZE */}
      <section
        id="empathize"
        className="py-36"
      >
        <div className="max-w-[1400px] mx-auto px-8">

          {/* HEADER */}

          <div className="max-w-4xl">

            <span className="inline-flex px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#214B3E] text-sm font-medium">
              Stage 01
            </span>

            <h2 className="text-6xl font-bold mt-8">
              Empathize
            </h2>

            <p className="mt-6 text-xl text-stone-600 leading-relaxed">
              Tahap awal difokuskan untuk memahami perilaku,
              kebutuhan, serta hambatan yang dialami pengguna
              saat menentukan pilihan perjalanan sehari-hari.
            </p>

          </div>

          {/* RESEARCH METHOD */}

          <div className="grid md:grid-cols-3 gap-6 mt-20">

            <div className="bg-white border border-stone-200 rounded-[28px] p-8">

              <div className="text-[#214B3E] text-sm font-semibold">
                01
              </div>

              <h3 className="text-xl font-semibold mt-4">
                User Interview
              </h3>

              <p className="mt-4 text-stone-600">
                Mengumpulkan pengalaman langsung pengguna
                mengenai proses perjalanan sehari-hari.
              </p>

            </div>

            <div className="bg-white border border-stone-200 rounded-[28px] p-8">

              <div className="text-[#214B3E] text-sm font-semibold">
                02
              </div>

              <h3 className="text-xl font-semibold mt-4">
                Affinity Mapping
              </h3>

              <p className="mt-4 text-stone-600">
                Mengelompokkan insight hasil wawancara
                menjadi pola kebutuhan yang serupa.
              </p>

            </div>

            <div className="bg-white border border-stone-200 rounded-[28px] p-8">

              <div className="text-[#214B3E] text-sm font-semibold">
                03
              </div>

              <h3 className="text-xl font-semibold mt-4">
                Problem Discovery
              </h3>

              <p className="mt-4 text-stone-600">
                Mengidentifikasi masalah yang paling
                sering dialami pengguna.
              </p>

            </div>

          </div>

          {/* INSIGHT HIGHLIGHT */}

          <div className="mt-20 bg-[#214B3E] rounded-[40px] p-14 text-white">

            <span className="uppercase tracking-[0.2em] text-green-200 text-sm">
              Main Insight
            </span>

            <h3 className="text-4xl font-bold mt-5 max-w-4xl leading-tight">
              Pengguna membutuhkan satu platform yang dapat
              membantu membandingkan pilihan perjalanan dengan
              cepat tanpa harus berpindah aplikasi.
            </h3>

            <p className="mt-6 text-green-50 max-w-3xl text-lg">
              Mayoritas responden menyatakan bahwa proses
              mencari informasi perjalanan masih memerlukan
              banyak aplikasi berbeda sehingga memakan waktu
              dan membingungkan.
            </p>

          </div>

          {/* FIGMA */}

          <div className="mt-20">

            <div className="mb-8">

              <h3 className="text-3xl font-semibold">
                Research Documentation
              </h3>

              <p className="text-stone-500 mt-3">
                Dokumentasi lengkap proses wawancara,
                affinity mapping, dan analisis insight.
              </p>

            </div>

            <div className="overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

              <iframe
                src={FIGMA_EMPATHIZE}
                className="w-full h-[850px]"
              />

            </div>

          </div>

          {/* KEY FINDINGS */}

          <div className="mt-20">

            <h3 className="text-3xl font-semibold mb-10">
              Key Findings
            </h3>

            <div className="grid lg:grid-cols-3 gap-6">

              <div className="bg-[#F4F7F5] rounded-[28px] p-8">

                <div className="text-5xl font-bold text-[#214B3E]">
                  01
                </div>

                <p className="mt-6 text-stone-600">
                  Sulit menentukan rute terbaik karena
                  informasi tersebar di banyak platform.
                </p>

              </div>

              <div className="bg-[#F4F7F5] rounded-[28px] p-8">

                <div className="text-5xl font-bold text-[#214B3E]">
                  02
                </div>

                <p className="mt-6 text-stone-600">
                  Pengguna ingin estimasi biaya dan
                  waktu perjalanan yang lebih jelas.
                </p>

              </div>

              <div className="bg-[#F4F7F5] rounded-[28px] p-8">

                <div className="text-5xl font-bold text-[#214B3E]">
                  03
                </div>

                <p className="mt-6 text-stone-600">
                  Kecepatan memperoleh informasi menjadi
                  faktor penting dalam memilih transportasi.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* DEFINE */}
      <section
        id="define"
        className="py-36 bg-white"
      >

        <div className="max-w-[1400px] mx-auto px-8">

          {/* HEADER */}

          <div className="max-w-4xl">

            <span className="inline-flex px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#214B3E] text-sm font-medium">
              Stage 02
            </span>

            <h2 className="text-6xl font-bold mt-8">
              Define
            </h2>

            <p className="mt-6 text-xl text-stone-600 leading-relaxed">
              Hasil riset kemudian disintesis untuk menemukan
              masalah utama yang paling berdampak terhadap pengguna.
            </p>

          </div>

          {/* TOP GRID */}

          <div className="grid lg:grid-cols-2 gap-8 mt-20">

            {/* PROBLEM */}

            <div className="bg-[#214B3E] text-white rounded-[40px] p-12">

              <span className="text-green-200 text-sm uppercase tracking-[0.2em]">
                Problem Statement
              </span>

              <h3 className="text-3xl font-bold mt-6 leading-relaxed">

                Pengguna mengalami kesulitan menentukan
                pilihan perjalanan yang paling sesuai
                karena informasi transportasi tersebar
                di berbagai platform.

              </h3>

            </div>

            {/* HMW */}

            <div className="bg-[#F4F7F5] rounded-[40px] p-12">

              <span className="text-[#214B3E] text-sm uppercase tracking-[0.2em]">
                How Might We
              </span>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">

                  <div className="font-bold text-[#214B3E]">
                    01
                  </div>

                  <p className="font-medium">
                    Bagaimana membantu pengguna memilih
                    perjalanan terbaik dengan cepat?
                  </p>

                </div>

                <div className="flex gap-4">

                  <div className="font-bold text-[#214B3E]">
                    02
                  </div>

                  <p className="font-medium">
                    Bagaimana menyajikan informasi
                    transportasi dalam satu platform?
                  </p>

                </div>

                <div className="flex gap-4">

                  <div className="font-bold text-[#214B3E]">
                    03
                  </div>

                  <p className="font-medium">
                    Bagaimana membuat pengalaman
                    navigasi lebih intuitif?
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* PRIORITY */}

          <div className="mt-8 bg-[#F8F8F4] rounded-[40px] border border-stone-200 p-12">

            <span className="text-[#214B3E] text-sm uppercase tracking-[0.2em]">
              Prioritas Masalah
            </span>

            <div className="grid md:grid-cols-3 gap-10 mt-10">

              <div>

                <div className="text-6xl font-black text-[#214B3E]">
                  01
                </div>

                <h4 className="font-semibold text-xl mt-4">
                  Menentukan perjalanan terbaik
                </h4>

                <p className="text-stone-600 mt-3">
                  Sulit memilih opsi perjalanan yang
                  sesuai dengan kebutuhan pengguna.
                </p>

              </div>

              <div>

                <div className="text-6xl font-black text-[#5F9B82]">
                  02
                </div>

                <h4 className="font-semibold text-xl mt-4">
                  Membandingkan transportasi
                </h4>

                <p className="text-stone-600 mt-3">
                  Informasi tersebar di berbagai
                  platform yang berbeda.
                </p>

              </div>

              <div>

                <div className="text-6xl font-black text-[#AABCB4]">
                  03
                </div>

                <h4 className="font-semibold text-xl mt-4">
                  Memahami informasi perjalanan
                </h4>

                <p className="text-stone-600 mt-3">
                  Estimasi waktu dan biaya belum
                  tersampaikan secara jelas.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* IDEATE */}
      <section
        id="ideate"
        className="py-36"
      >

        <div className="max-w-[1400px] mx-auto px-8">

          {/* HEADER */}

          <div className="max-w-4xl">

            <span className="inline-flex px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#214B3E] text-sm font-medium">
              Stage 03
            </span>

            <h2 className="text-6xl font-bold mt-8">
              Ideate
            </h2>

            <p className="mt-6 text-xl text-stone-600 leading-relaxed">
              Setelah masalah utama berhasil diidentifikasi,
              proses dilanjutkan dengan mengeksplorasi berbagai
              alternatif solusi yang berpotensi menjawab kebutuhan pengguna.
            </p>

          </div>

          {/* INTRO */}

          <div className="mt-20 bg-[#214B3E] rounded-[40px] p-14 text-white">

            <span className="uppercase tracking-[0.2em] text-green-200 text-sm">
              Solution Exploration
            </span>

            <h3 className="text-4xl font-bold mt-5 max-w-4xl">
              Berbagai ide dieksplorasi melalui brainstorming,
              sketching, user flow, dan penyusunan design system
              untuk menemukan solusi terbaik bagi pengguna.
            </h3>

          </div>

          {/* CRAZY 8 */}

          <div className="mt-24">

            <h3 className="text-4xl font-bold">
              Crazy 8's & Brainstorming
            </h3>

            <p className="text-stone-500 mt-4 max-w-3xl">
              Teknik Crazy 8 digunakan untuk menghasilkan
              berbagai alternatif solusi secara cepat sebelum
              menentukan konsep yang akan dikembangkan lebih lanjut.
            </p>

            <div className="mt-10 overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

              <iframe
                src={FIGMA_CRAZY8}
                className="w-full h-[700px]"
              />

            </div>

          </div>

          {/* LOW FIDELITY */}

          <div className="mt-28">

            <h3 className="text-4xl font-bold">
              Low-Fidelity Sketches
            </h3>

            <p className="text-stone-500 mt-4 max-w-3xl">
              Sketsa awal digunakan untuk memvisualisasikan
              struktur antarmuka dan alur interaksi pengguna
              sebelum memasuki tahap desain digital.
            </p>

            <div className="mt-10 overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

              <iframe
                src={FIGMA_LOFI}
                className="w-full h-[700px]"
              />

            </div>

          </div>

          {/* USER FLOW + DESIGN SYSTEM */}

          <div className="grid lg:grid-cols-2 gap-8 mt-28">

            {/* USER FLOW */}

            <div>

              <h3 className="text-3xl font-bold">
                User Flow
              </h3>

              <p className="text-stone-500 mt-4">
                Visualisasi perjalanan pengguna saat menggunakan aplikasi.
              </p>

              <div className="mt-8 overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

                <iframe
                  src={FIGMA_USERFLOW}
                  className="w-full h-[600px]"
                />

              </div>

            </div>

            {/* DESIGN SYSTEM */}

            <div>

              <h3 className="text-3xl font-bold">
                UI Kit & Design System
              </h3>

              <p className="text-stone-500 mt-4">
                Komponen dan panduan visual yang digunakan
                untuk menjaga konsistensi antarmuka.
              </p>

              <div className="mt-8 overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

                <iframe
                  src={FIGMA_DESIGNSYSTEM}
                  className="w-full h-[600px]"
                />

              </div>

            </div>

          </div>

          {/* TRANSITION */}

          <div className="mt-28 text-center">

            <div className="inline-flex px-5 py-3 rounded-full bg-green-50 border border-green-100 text-[#214B3E] font-medium">
              Final solution selected for prototyping ↓
            </div>

          </div>

        </div>

      </section>

      {/* PROTOTYPE */}

      <section
        id="prototype"
        className="py-32"
      >
        <div className="max-w-[1400px] mx-auto px-8">

          <span className="text-[#214B3E] uppercase tracking-[0.2em] text-sm font-medium">
            Interactive Experience
          </span>

          <h2 className="text-6xl font-bold mt-4">
            Prototype
          </h2>

          <p className="mt-6 text-lg text-stone-600 max-w-3xl">
            Prototype interaktif dibuat menggunakan Figma
            untuk mensimulasikan pengalaman pengguna sebelum
            tahap pengembangan aplikasi.
          </p>

          <div className="mt-14 overflow-hidden rounded-[32px] border border-stone-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <iframe
              src={FIGMA_PROTOTYPE}
              className="w-full h-[750px]"
            />
          </div>

        </div>
      </section>

      {/* TEST */}

      <section
        id="test"
        className="py-32 bg-white"
      >
        <div className="max-w-[1400px] mx-auto px-8">

          <span className="text-[#214B3E] uppercase tracking-[0.2em] text-sm font-medium">
            Validation
          </span>

          <h2 className="text-6xl font-bold mt-4">
            Test
          </h2>

          <div className="grid lg:grid-cols-2 gap-14 mt-14 items-center">

            <div>

              <Image
                src="/testing-user.jpg"
                alt="Testing User"
                width={700}
                height={500}
                className="rounded-[32px] border border-stone-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              />

            </div>

            <div>

              <h3 className="text-3xl font-semibold mb-6">
                Usability Testing Results
              </h3>

              <p className="text-stone-600 leading-relaxed">
                Pengujian dilakukan kepada seorang teman untuk
                mengevaluasi kemudahan penggunaan aplikasi.
                Pengguna dapat menyelesaikan seluruh tugas utama
                tanpa hambatan yang berarti.
              </p>

              <div className="mt-8 space-y-4">

                <div className="bg-[#FAFAF8] p-5 rounded-2xl border border-stone-200">
                  ✓ Navigasi mudah dipahami.
                </div>

                <div className="bg-[#FAFAF8] p-5 rounded-2xl border border-stone-200">
                  ✓ Informasi perjalanan jelas.
                </div>

                <div className="bg-[#FAFAF8] p-5 rounded-2xl border border-stone-200">
                  ✓ Tampilan nyaman digunakan.
                </div>

                <div className="bg-[#FAFAF8] p-5 rounded-2xl border border-stone-200">
                  ✓ Pengguna berhasil menyelesaikan task utama.
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONCLUSION */}

      <section className="py-32">

        <div className="max-w-[1400px] mx-auto px-8">

          <div className="bg-[#214B3E] rounded-[40px] p-14 text-white">

            <span className="uppercase tracking-[0.2em] text-sm text-green-100">
              Conclusion
            </span>

            <h2 className="text-5xl font-bold mt-4">
              What We Learned
            </h2>

            <p className="mt-8 text-lg text-green-50 max-w-4xl leading-relaxed">
              Melalui pendekatan Design Thinking, nav.io berhasil
              dirancang sebagai solusi mobilitas yang berfokus pada
              kebutuhan pengguna. Validasi yang dilakukan menunjukkan
              bahwa konsep yang dikembangkan mudah digunakan dan
              mampu membantu pengguna menentukan perjalanan dengan
              lebih efisien.
            </p>

          </div>

        </div>
      </section>

      {/* CREATOR */}

      <section className="pb-32">

        <div className="bg-white rounded-[40px] border border-stone-200 p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

          <span className="uppercase tracking-[0.2em] text-sm text-[#214B3E]">
            Creator
          </span>

          <div className="flex flex-col md:flex-row items-center gap-10 mt-8">

            <Image
              src="/profile.jpg"
              alt="Ardansa"
              width={180}
              height={180}
              className="
              rounded-full
              object-cover
              border-4
              border-green-100
              shadow-xl
              "
            />

            <div>

              <h2 className="text-5xl font-bold">
                Ardansa
              </h2>

              <p className="mt-2 text-xl text-stone-500">
                UI/UX Designer • Frontend Developer
              </p>

              <p className="mt-6 text-stone-600 max-w-2xl leading-relaxed">
                Pengembang proyek nav.io yang berfokus pada
                riset pengguna, perancangan antarmuka modern,
                serta pengembangan solusi digital yang
                membantu pengguna memperoleh pengalaman
                perjalanan yang lebih efisien.
              </p>

            </div>

          </div>

        </div>
      </section>

      <footer className="border-t border-stone-200 py-10">

      <div className="max-w-[1400px] mx-auto px-8 flex justify-between">

      <p className="text-stone-500">
      © 2026 nav.io
      </p>

      <p className="text-stone-500">
      Designed by Ardansa
      </p>

      </div>

      </footer>

    </main>
  );
}