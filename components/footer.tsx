import { Link } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-7xl">
        <p className="text-center text-xs sm:text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 PEPADI. Hak Cipta Dilindungi.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
          >
            Ketentuan
          </Link>
          <Link
            href="#"
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
          >
            Privasi
          </Link>
          <Link
            href="#"
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
          >
            Kontak
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
