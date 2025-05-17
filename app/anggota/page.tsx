import type { Metadata } from "next"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { TabsNavigation } from "@/components/tabs-navigation"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Anggota PEPADI | Persatuan Pedalangan Indonesia",
  description: "Temukan anggota dan sanggar seni wayang yang tergabung dalam PEPADI di seluruh Indonesia.",
}

export default function AnggotaPage() {
  const sanggarList = [
    {
      id: 1,
      name: "Sanggar Wayang Sasana Adiluhung",
      location: "Jakarta Selatan",
      description:
        "Sanggar seni wayang kulit yang fokus pada pelatihan dalang muda dan pertunjukan wayang kulit gaya Surakarta.",
      image: "/placeholder-tqy1r.png",
      contact: "0812-3456-7890",
      leader: "Ki Manteb Soedharsono",
      members: 25,
      artType: "Wayang Kulit",
    },
    {
      id: 2,
      name: "Sanggar Seni Asri Laras",
      location: "Yogyakarta",
      description:
        "Sanggar seni tradisional yang melestarikan wayang golek dan wayang kulit gaya Yogyakarta dengan pelatihan reguler.",
      image: "/placeholder-ieftg.png",
      contact: "0878-9012-3456",
      leader: "Dewi Kartika",
      members: 18,
      artType: "Wayang Golek",
    },
    {
      id: 3,
      name: "Padepokan Seni Bagong Kussudiardja",
      location: "Bantul, Yogyakarta",
      description: "Padepokan seni multidisiplin yang menyelenggarakan pelatihan wayang, tari, dan musik gamelan.",
      image: "/placeholder-uk0h5.png",
      contact: "0856-7890-1234",
      leader: "Bagong Kussudiardja Jr.",
      members: 40,
      artType: "Multidisiplin",
    },
    {
      id: 4,
      name: "Sanggar Wayang Kautaman",
      location: "Surakarta",
      description: "Sanggar wayang yang fokus pada pengembangan wayang kontemporer dan kolaborasi dengan seni modern.",
      image: "/placeholder-6xgo5.png",
      contact: "0821-3456-7890",
      leader: "Agus Prasetyo",
      members: 15,
      artType: "Wayang Kontemporer",
    },
    {
      id: 5,
      name: "Sanggar Seni Satriya Lelana",
      location: "Bandung",
      description:
        "Sanggar seni wayang golek Sunda yang aktif melakukan pertunjukan dan pelatihan untuk generasi muda.",
      image: "/placeholder-2ftax.png",
      contact: "0813-9876-5432",
      leader: "Asep Sunandar",
      members: 22,
      artType: "Wayang Golek Sunda",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Anggota PEPADI</h1>
      <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
        Temukan sanggar seni wayang dan pedalangan di seluruh Indonesia yang tergabung dalam PEPADI. Sanggar-sanggar ini
        aktif melestarikan dan mengembangkan seni wayang melalui berbagai kegiatan dan pelatihan.
      </p>

      <TabsNavigation />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Sanggar Seni</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Urutkan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {sanggarList.map((sanggar) => (
          <div
            key={sanggar.id}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video relative">
              <ImageWithFallback
                src={sanggar.image || "/placeholder.svg"}
                alt={sanggar.name}
                fill
                className="object-cover"
                fallbackSrc="/vibrant-art-studio.png"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{sanggar.name}</h3>
              <div className="flex flex-col gap-1 mb-3">
                <p className="text-sm text-muted-foreground">
                  <span className="inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {sanggar.location}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Pimpinan: {sanggar.leader}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Anggota: {sanggar.members} orang
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                    Jenis Seni: {sanggar.artType}
                  </span>
                </p>
              </div>
              <p className="text-sm mb-4">{sanggar.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">
                  <span className="inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {sanggar.contact}
                  </span>
                </p>
                <Button variant="link" size="sm">
                  Lihat Detail
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button className="px-4 py-2">Lihat Semua Sanggar Seni</Button>
      </div>
    </main>
  )
}
