import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section Skeleton */}
      <section className="relative bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="mx-auto mb-4 h-12 w-3/4 max-w-md" />
          <Skeleton className="mx-auto mb-8 h-24 w-full max-w-2xl" />
          <div className="mx-auto flex max-w-md flex-col items-center gap-4 sm:flex-row">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full sm:w-32" />
          </div>
        </div>
      </section>

      {/* Featured Courses Skeleton */}
      <section className="container mx-auto px-4 py-16">
        <Skeleton className="mx-auto mb-8 h-10 w-64" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="mb-2 h-6 w-3/4" />
                  <Skeleton className="mb-4 h-4 w-1/2" />
                  <Skeleton className="mb-4 h-16 w-full" />
                  <div className="mb-4 flex flex-wrap gap-4">
                    {Array(3)
                      .fill(0)
                      .map((_, j) => (
                        <Skeleton key={j} className="h-5 w-20" />
                      ))}
                  </div>
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* All Courses Skeleton */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-64" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="mb-2 h-6 w-3/4" />
                  <Skeleton className="mb-4 h-4 w-1/2" />
                  <Skeleton className="mb-4 h-16 w-full" />
                  <div className="mb-4 flex flex-wrap gap-4">
                    {Array(3)
                      .fill(0)
                      .map((_, j) => (
                        <Skeleton key={j} className="h-5 w-20" />
                      ))}
                  </div>
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Skeleton className="h-10 w-40" />
        </div>
      </section>

      {/* Categories Skeleton */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <Skeleton className="mx-auto mb-8 h-10 w-64" />
          <div className="flex flex-wrap justify-center gap-4">
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-10 w-32 rounded-full" />
              ))}
          </div>
        </div>
      </section>

      {/* Become Instructor Skeleton */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-xl bg-primary/10 p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <Skeleton className="mb-4 h-10 w-3/4" />
              <Skeleton className="mb-6 h-20 w-full" />
              <Skeleton className="h-12 w-48" />
            </div>
            <div className="flex-1">
              <Skeleton className="aspect-video w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
