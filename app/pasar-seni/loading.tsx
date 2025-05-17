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

      {/* Featured Products Skeleton */}
      <section className="container mx-auto px-4 py-16">
        <Skeleton className="mx-auto mb-8 h-10 w-64" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <Skeleton className="h-48 w-full" />
                <div className="p-4">
                  <Skeleton className="mb-2 h-6 w-3/4" />
                  <Skeleton className="mb-4 h-16 w-full" />
                  <div className="mb-4 flex items-center justify-between">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* All Products Skeleton */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Sidebar Skeleton */}
          <div className="md:col-span-1">
            <div className="rounded-xl border p-6">
              <Skeleton className="mb-4 h-8 w-24" />

              <div className="mb-6">
                <Skeleton className="mb-2 h-6 w-32" />
                <div className="space-y-2">
                  {Array(9)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-5 w-8" />
                      </div>
                    ))}
                </div>
              </div>

              <Skeleton className="my-4 h-px w-full" />

              <div className="mb-6">
                <Skeleton className="mb-2 h-6 w-32" />
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>

              <Skeleton className="my-4 h-px w-full" />

              <div className="mb-6">
                <Skeleton className="mb-2 h-6 w-24" />
                <div className="space-y-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-5 w-full" />
                    ))}
                </div>
              </div>

              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          {/* Products Grid Skeleton */}
          <div className="md:col-span-3">
            <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
              <Skeleton className="h-10 w-48" />
              <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="h-10 w-48" />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border">
                    <Skeleton className="h-48 w-full" />
                    <div className="p-4">
                      <Skeleton className="mb-2 h-6 w-3/4" />
                      <Skeleton className="mb-4 h-16 w-full" />
                      <div className="mb-4 flex items-center justify-between">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Skeleton */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="mx-auto mb-4 h-10 w-64" />
          <Skeleton className="mx-auto mb-8 h-20 w-full max-w-2xl" />
        </div>
      </section>
    </main>
  )
}
