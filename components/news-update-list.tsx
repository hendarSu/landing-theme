import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./image-with-fallback";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "./ui/card";

const NewsUpdateList = () => {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight">
              Berita & Informasi Terbaru
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-sm md:text-base lg:text-xl">
              Dapatkan informasi terkini tentang perkembangan seni pedalangan di
              Indonesia.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-12 grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={`news-${i}`} className="h-full">
              <CardHeader className="p-0">
                <ImageWithFallback
                  src={`/placeholder-bn0kj.png?height=200&width=400&query=news ${i}`}
                  alt={`Berita ${i}`}
                  width={400}
                  height={200}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                  fallbackSrc={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ObxMt4d3T5MDA2Ca7JyHf5lCNuxMZN.png?height=200&width=400&query=news ${i}`}
                />
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl mb-2">
                  {i === 1
                    ? "Pembukaan Sanggar Pedalangan Baru di Jakarta"
                    : i === 2
                    ? "Seri Workshop Pedalangan Musim Panas"
                    : "Hasil Kompetisi Pedalangan Nasional"}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4">
                  {new Date(2025, 5, i * 5).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                  {i === 1
                    ? "Kami dengan bangga mengumumkan pembukaan sanggar pedalangan baru di Jakarta. Fasilitas ini dilengkapi dengan panggung modern, koleksi wayang, dan ruang latihan yang nyaman."
                    : i === 2
                    ? "Pendaftaran telah dibuka untuk seri workshop pedalangan musim panas dengan instruktur tamu dari berbagai daerah di Indonesia. Harga promo tersedia hingga 15 Mei."
                    : "Selamat kepada semua peserta kompetisi pedalangan nasional tahun ini. Penghargaan khusus diberikan kepada anggota komunitas kami yang berhasil meraih posisi teratas."}
                </p>
              </CardContent>
              <CardFooter className="p-4 sm:p-6 pt-0 sm:pt-0">
                <Button variant="outline" className="w-full text-xs sm:text-sm">
                  Baca Selengkapnya
                  <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Button size="sm" className="sm:size-md">
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdateList;
