import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Use the MainNav component for the header */}
      <MainNav />
      
      {/* Main content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted bg-opacity-50 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1600&query=indonesian wayang puppetry organization"
              alt="PEPADI Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Tentang PEPADI
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Persatuan Pedalangan Indonesia (PEPADI) adalah organisasi yang berdedikasi untuk melestarikan dan
                  mengembangkan seni pedalangan di Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Tabs */}
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="sejarah" className="w-full">
              <TabsList className="mb-8 w-full justify-start overflow-x-auto">
                <TabsTrigger value="sejarah">Sejarah</TabsTrigger>
                <TabsTrigger value="visi-misi">Visi & Misi</TabsTrigger>
                <TabsTrigger value="struktur">Struktur Organisasi</TabsTrigger>
                <TabsTrigger value="program">Program Kerja</TabsTrigger>
                <TabsTrigger value="pencapaian">Pencapaian</TabsTrigger>
              </TabsList>

              <TabsContent value="sejarah">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Sejarah PEPADI</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Persatuan Pedalangan Indonesia (PEPADI) didirikan pada tanggal 12 Juli 1968 di Jakarta sebagai
                        wadah bagi para dalang dan seniman pedalangan di seluruh Indonesia. Organisasi ini lahir dari
                        keprihatinan terhadap kondisi seni pedalangan yang mulai tergerus oleh modernisasi dan kurangnya
                        regenerasi.
                      </p>
                      <p>
                        Pada awalnya, PEPADI hanya beranggotakan dalang-dalang dari Jawa Tengah dan Yogyakarta. Namun
                        seiring berjalannya waktu, keanggotaan PEPADI meluas ke seluruh provinsi di Indonesia yang
                        memiliki tradisi pedalangan, termasuk Jawa Barat, Jawa Timur, Bali, Sumatera, dan Kalimantan.
                      </p>
                      <p>
                        Sejak didirikan, PEPADI telah mengalami berbagai fase perkembangan dan transformasi untuk
                        beradaptasi dengan perubahan zaman. Dari fokus awal pada pelestarian tradisi, kini PEPADI juga
                        aktif dalam pengembangan inovasi seni pedalangan dan pemanfaatan teknologi untuk menjangkau
                        generasi muda.
                      </p>
                      <p>
                        Hingga saat ini, PEPADI telah menjadi organisasi terdepan dalam upaya pelestarian dan
                        pengembangan seni pedalangan di Indonesia, dengan ribuan anggota aktif dan berbagai program yang
                        tersebar di seluruh nusantara.
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=indonesian puppetry history"
                      alt="Sejarah PEPADI"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Tonggak Sejarah Penting</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-center">
                        <span className="inline-block w-full rounded bg-primary px-2 py-1 text-sm font-bold text-primary-foreground">
                          1968
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold">Pendirian PEPADI</h4>
                        <p className="text-muted-foreground">
                          PEPADI didirikan di Jakarta sebagai wadah bagi para dalang dan seniman pedalangan di
                          Indonesia.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-center">
                        <span className="inline-block w-full rounded bg-primary px-2 py-1 text-sm font-bold text-primary-foreground">
                          1975
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold">Festival Wayang Nasional Pertama</h4>
                        <p className="text-muted-foreground">
                          PEPADI menyelenggarakan Festival Wayang Nasional pertama yang diikuti oleh dalang-dalang dari
                          berbagai daerah di Indonesia.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-center">
                        <span className="inline-block w-full rounded bg-primary px-2 py-1 text-sm font-bold text-primary-foreground">
                          1988
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold">Perluasan Nasional</h4>
                        <p className="text-muted-foreground">
                          PEPADI membuka cabang di 15 provinsi di Indonesia, memperluas jangkauan dan pengaruhnya dalam
                          pelestarian seni pedalangan.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-center">
                        <span className="inline-block w-full rounded bg-primary px-2 py-1 text-sm font-bold text-primary-foreground">
                          2003
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold">Pengakuan UNESCO</h4>
                        <p className="text-muted-foreground">
                          PEPADI berperan penting dalam proses pengajuan wayang sebagai Warisan Budaya Tak Benda UNESCO,
                          yang akhirnya diakui pada tahun ini.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-center">
                        <span className="inline-block w-full rounded bg-primary px-2 py-1 text-sm font-bold text-primary-foreground">
                          2015
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold">Digitalisasi Wayang</h4>
                        <p className="text-muted-foreground">
                          PEPADI meluncurkan program digitalisasi wayang untuk melestarikan dan memperkenalkan seni
                          pedalangan melalui platform digital.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 text-center">
                        <span className="inline-block w-full rounded bg-primary px-2 py-1 text-sm font-bold text-primary-foreground">
                          2023
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold">Pembukaan Pusat Pedalangan Modern</h4>
                        <p className="text-muted-foreground">
                          Peresmian Pusat Pedalangan Modern di Jakarta yang dilengkapi dengan teknologi terkini untuk
                          pendidikan, pertunjukan, dan penelitian seni pedalangan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="visi-misi">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=indonesian puppetry vision mission"
                      alt="Visi & Misi PEPADI"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Visi & Misi</h2>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-3">Visi</h3>
                      <p className="text-muted-foreground">
                        Menjadi organisasi terdepan dalam pelestarian, pengembangan, dan promosi seni pedalangan
                        Indonesia yang diakui secara nasional dan internasional, serta mampu beradaptasi dengan
                        perkembangan zaman tanpa kehilangan nilai-nilai tradisional.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">Misi</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-2">
                          <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>
                            Melestarikan dan mengembangkan berbagai bentuk seni pedalangan di seluruh Indonesia.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>
                            Meningkatkan kualitas dan profesionalisme para dalang dan seniman pedalangan melalui
                            pendidikan dan pelatihan.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>
                            Mendokumentasikan dan mendigitalisasi berbagai bentuk seni pedalangan untuk kepentingan
                            pendidikan dan penelitian.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>
                            Memperkenalkan dan mempromosikan seni pedalangan Indonesia kepada masyarakat luas, baik di
                            dalam maupun luar negeri.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>
                            Mengembangkan inovasi dalam seni pedalangan yang relevan dengan perkembangan zaman tanpa
                            menghilangkan nilai-nilai tradisional.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>
                            Membangun jaringan dan kerjasama dengan berbagai pihak untuk mendukung pelestarian dan
                            pengembangan seni pedalangan.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Nilai-Nilai Organisasi</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      {
                        title: "Pelestarian",
                        description:
                          "Menjaga dan melestarikan warisan budaya pedalangan Indonesia untuk generasi mendatang.",
                      },
                      {
                        title: "Inovasi",
                        description:
                          "Mengembangkan pendekatan baru dalam seni pedalangan yang relevan dengan perkembangan zaman.",
                      },
                      {
                        title: "Kolaborasi",
                        description:
                          "Membangun kerjasama dengan berbagai pihak untuk mendukung pelestarian dan pengembangan seni pedalangan.",
                      },
                      {
                        title: "Edukasi",
                        description:
                          "Meningkatkan pemahaman dan apresiasi masyarakat terhadap seni pedalangan melalui pendidikan dan pelatihan.",
                      },
                    ].map((item) => (
                      <Card key={item.title} className="bg-white shadow-md">
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-2">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="struktur">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Struktur Organisasi</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Struktur organisasi PEPADI terdiri dari Dewan Pimpinan Pusat (DPP) sebagai pengurus tertinggi,
                        Dewan Pimpinan Daerah (DPD) di tingkat provinsi, dan Dewan Pimpinan Cabang (DPC) di tingkat
                        kabupaten/kota.
                      </p>
                      <p>
                        DPP PEPADI bertanggung jawab atas perumusan kebijakan, koordinasi program, dan pengelolaan
                        organisasi secara nasional. DPD PEPADI bertugas melaksanakan program-program PEPADI di tingkat
                        provinsi dan menjalin kerjasama dengan pemerintah daerah dan pihak terkait. DPC PEPADI berperan
                        sebagai ujung tombak organisasi dalam melaksanakan kegiatan-kegiatan pelestarian dan
                        pengembangan seni pedalangan di tingkat lokal.
                      </p>
                      <p>
                        Selain itu, PEPADI juga memiliki berbagai bidang dan komisi yang bertugas menangani isu-isu
                        spesifik terkait seni pedalangan, seperti bidang pendidikan dan pelatihan, bidang penelitian dan
                        pengembangan, bidang promosi dan pemasaran, serta komisi etik dan disiplin.
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=indonesian puppetry organization structure"
                      alt="Struktur Organisasi PEPADI"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Pengurus Dewan Pimpinan Pusat (DPP)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Nama Lengkap",
                        position: "Ketua Umum",
                      },
                      {
                        name: "Nama Lengkap",
                        position: "Sekretaris Jenderal",
                      },
                      {
                        name: "Nama Lengkap",
                        position: "Bendahara Umum",
                      },
                      {
                        name: "Nama Lengkap",
                        position: "Ketua Bidang Organisasi",
                      },
                      {
                        name: "Nama Lengkap",
                        position: "Ketua Bidang Pendidikan dan Pelatihan",
                      },
                      {
                        name: "Nama Lengkap",
                        position: "Ketua Bidang Penelitian dan Pengembangan",
                      },
                    ].map((item) => (
                      <Card key={item.name} className="bg-white shadow-md">
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-2">{item.name}</h4>
                          <p className="text-muted-foreground">{item.position}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="program">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Program Kerja</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        PEPADI memiliki berbagai program kerja yang bertujuan untuk melestarikan, mengembangkan, dan
                        mempromosikan seni pedalangan di Indonesia. Program-program ini mencakup berbagai aspek, mulai
                        dari pendidikan dan pelatihan, penelitian dan pengembangan, hingga promosi dan pemasaran.
                      </p>
                      <p>
                        Beberapa program unggulan PEPADI antara lain Festival Wayang Nasional, pelatihan dalang muda,
                        digitalisasi wayang, pengembangan kurikulum pedalangan, serta kerjasama dengan berbagai pihak
                        untuk mendukung pelestarian seni pedalangan.
                      </p>
                      <p>
                        Selain itu, PEPADI juga aktif dalam melakukan advokasi kebijakan untuk mendukung pengembangan
                        seni pedalangan, serta memberikan bantuan kepada para dalang dan seniman pedalangan yang
                        membutuhkan.
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=indonesian puppetry work program"
                      alt="Program Kerja PEPADI"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Program Unggulan</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Festival Wayang Nasional",
                        description:
                          "Penyelenggaraan festival wayang nasional setiap tahun untuk mempromosikan seni pedalangan dan memberikan wadah bagi para dalang untuk berkreasi.",
                      },
                      {
                        title: "Pelatihan Dalang Muda",
                        description:
                          "Penyelenggaraan pelatihan dalang muda untuk regenerasi seniman pedalangan dan meningkatkan kualitas generasi penerus.",
                      },
                      {
                        title: "Digitalisasi Wayang",
                        description:
                          "Program digitalisasi wayang untuk melestarikan dan memperkenalkan seni pedalangan melalui platform digital.",
                      },
                      {
                        title: "Pengembangan Kurikulum Pedalangan",
                        description:
                          "Pengembangan kurikulum pedalangan untuk pendidikan formal dan non-formal guna meningkatkan pemahaman dan apresiasi terhadap seni pedalangan.",
                      },
                    ].map((item) => (
                      <Card key={item.title} className="bg-white shadow-md">
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-2">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pencapaian">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=indonesian puppetry achievements"
                      alt="Pencapaian PEPADI"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Pencapaian</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Sejak didirikan, PEPADI telah mencapai berbagai prestasi dan kontribusi dalam pelestarian dan
                        pengembangan seni pedalangan di Indonesia. Beberapa pencapaian penting PEPADI antara lain:
                      </p>
                      <p>
                        - Berperan aktif dalam pengajuan wayang sebagai Warisan Budaya Tak Benda UNESCO pada tahun 2003.
                      </p>
                      <p>
                        - Menyelenggarakan Festival Wayang Nasional secara rutin setiap tahun, yang menjadi ajang
                        pertemuan dan apresiasi bagi para dalang dan seniman pedalangan dari seluruh Indonesia.
                      </p>
                      <p>
                        - Melakukan berbagai program pendidikan dan pelatihan untuk meningkatkan kualitas dan
                        profesionalisme para dalang dan seniman pedalangan.
                      </p>
                      <p>
                        - Mengembangkan berbagai inovasi dalam seni pedalangan, termasuk pemanfaatan teknologi digital
                        untuk melestarikan dan memperkenalkan seni pedalangan kepada generasi muda.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Penghargaan dan Pengakuan</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Penghargaan Budaya",
                        description:
                          "Menerima penghargaan budaya dari pemerintah atas kontribusi dalam pelestarian dan pengembangan seni pedalangan.",
                      },
                      {
                        title: "Pengakuan UNESCO",
                        description:
                          "Diakui oleh UNESCO sebagai organisasi yang berperan penting dalam pelestarian warisan budaya tak benda wayang.",
                      },
                      {
                        title: "Kerjasama Internasional",
                        description:
                          "Menjalin kerjasama dengan berbagai organisasi internasional untuk mempromosikan seni pedalangan Indonesia di kancah dunia.",
                      },
                    ].map((item) => (
                      <Card key={item.title} className="bg-white shadow-md">
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-2">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}
