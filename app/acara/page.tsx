import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dummy data untuk acara
const upcomingEvents = [
  {
    id: 1,
    title: "Festival Wayang Kulit Nasional",
    date: "15 Juni 2024",
    time: "10:00 - 22:00",
    location: "Taman Ismail Marzuki, Jakarta",
    image: "/placeholder-heuxi.png",
    description: "Festival tahunan yang menampilkan pertunjukan wayang kulit dari berbagai daerah di Indonesia.",
    attendees: 250,
  },
  {
    id: 2,
    title: "Workshop Pembuatan Wayang",
    date: "20 Juni 2024",
    time: "09:00 - 15:00",
    location: "Galeri Seni Budaya, Yogyakarta",
    image: "/placeholder-bn0kj.png",
    description: "Belajar teknik dasar pembuatan wayang kulit bersama para ahli dari Yogyakarta.",
    attendees: 30,
  },
  {
    id: 3,
    title: "Seminar Pelestarian Seni Wayang",
    date: "25 Juni 2024",
    time: "13:00 - 17:00",
    location: "Universitas Indonesia, Depok",
    image: "/placeholder-7ohh2.png",
    description: "Diskusi tentang strategi pelestarian dan pengembangan seni wayang di era digital.",
    attendees: 120,
  },
  {
    id: 4,
    title: "Pertunjukan Wayang Golek Spesial",
    date: "2 Juli 2024",
    time: "19:00 - 23:00",
    location: "Gedung Kesenian Jakarta",
    image: "/placeholder-woasx.png",
    description: "Pertunjukan wayang golek dengan cerita Mahabharata oleh dalang terkenal Ki Manteb Soedharsono.",
    attendees: 300,
  },
]

const pastEvents = [
  {
    id: 5,
    title: "Festival Wayang Inovasi",
    date: "10 Mei 2024",
    time: "10:00 - 20:00",
    location: "Taman Budaya Surakarta",
    image: "/placeholder-qdvbb.png",
    description: "Festival yang menampilkan inovasi dalam seni pertunjukan wayang.",
    attendees: 200,
  },
  {
    id: 6,
    title: "Lokakarya Dalang Muda",
    date: "5 Mei 2024",
    time: "09:00 - 16:00",
    location: "Sanggar Wayang Kautaman, Bali",
    image: "/placeholder-f5x4k.png",
    description: "Pelatihan intensif untuk dalang muda berbakat dari seluruh Indonesia.",
    attendees: 25,
  },
]

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Acara PEPADI</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Temukan berbagai acara menarik seputar wayang dan seni pertunjukan tradisional Indonesia yang
            diselenggarakan oleh PEPADI.
          </p>
          <Button size="lg" className="bg-primary">
            Lihat Semua Acara
          </Button>
        </div>
        <div className="absolute inset-0 -z-10 bg-[url('/wireless-microphone.png')] bg-cover bg-center opacity-5"></div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="upcoming" className="w-full">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-3xl font-bold">Jadwal Acara</h2>
            <TabsList>
              <TabsTrigger value="upcoming">Akan Datang</TabsTrigger>
              <TabsTrigger value="past">Telah Berlalu</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upcoming" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{event.attendees} peserta</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/acara/${event.id}`}>Daftar Sekarang</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{event.attendees} peserta</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/acara/${event.id}`}>Lihat Detail</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ingin Mengadakan Acara?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            PEPADI menyediakan dukungan untuk komunitas dan organisasi yang ingin mengadakan acara terkait wayang dan
            seni pertunjukan tradisional.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="outline" size="lg">
              Hubungi Kami
            </Button>
            <Button size="lg" className="bg-primary">
              Ajukan Proposal
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
