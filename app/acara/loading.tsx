import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section Skeleton */}
      <section className="relative bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="mx-auto mb-4 h-12 w-3/4 max-w-md" />
          <Skeleton className="mx-auto mb-8 h-24 w-full max-w-2xl" />
          <Skeleton className="mx-auto h-12 w-40" />
        </div>
      </section>

      {/* Events Section Skeleton */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-64" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="mb-2 h-6 w-3/4" />
                  <Skeleton className="mb-4 h-16 w-full" />
                  <div className="space-y-2">
                    {Array(4)
                      .fill(0)
                      .map((_, j) => (
                        <Skeleton key={j} className="h-5 w-full" />
                      ))}
                  </div>
                  <Skeleton className="mt-4 h-10 w-full" />
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Call to Action Skeleton */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="mx-auto mb-4 h-10 w-1/2 max-w-md" />
          <Skeleton className="mx-auto mb-8 h-20 w-full max-w-2xl" />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </section>
    </main>
  )
}
