import { ImageWithFallback } from "@/components/image-with-fallback"
import Link from "next/link"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/">
      <div className={`flex items-center ${className}`}>
        <div className="relative h-12 w-12 flex-shrink-0">
          <ImageWithFallback
            src="/logo-pepadi.webp"
            // src="/image.png"
            alt="Logo PEPADI"
            width={48}
            height={48}
            className="h-full w-auto"
            priority
            fallbackSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-pepadi-500px%20%281%29-mop3goeC5sd2QjcUzMj4DgdDd5yVBC.webp"
          />
        </div>
        {showText && <span className="text-xl font-bold text-pepadi-black ml-2 hidden sm:inline-block">PEPADI Kabupaten Bandung</span>}
      </div>
    </Link>
  )
}
