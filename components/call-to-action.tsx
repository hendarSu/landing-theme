import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 border-t bg-muted">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight">
              Ikuti Komunitas Pedalangan Kami
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-sm md:text-base lg:text-xl">
              Terhubung dengan sesama seniman, akses sumber daya eksklusif, dan
              kembangkan karir Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button size="sm" className="sm:size-md" asChild>
              <a
                href={`https://www.instagram.com/${
                  process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ikuti Instagram Kami
              </a>
            </Button>
            {/* <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Pelajari Lebih Lanjut
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
