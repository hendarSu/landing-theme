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

      {/* Featured News Skeleton */}
      <section className="container mx-auto px-4 py-16">
        <Skeleton className="mb-8 h-10 w-48" />
        <div className="overflow-hidden rounded-xl border">
          <div className="grid gap-6 md:grid-cols-2">
            <Skeleton className="h-64 w-full md:h-auto" />
            <div className="p-6">
              <Skeleton className="mb-2 h-6 w-24" />
              <Skeleton className="mb-2 h-8 w-full" />
              <div className="mb-4 flex items-center gap-4">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-32" />
              </div>
              <Skeleton className="mb-6 h-24 w-full" />
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Skeleton */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Skeleton className="mb-8 h-10 w-48" />
            <div className="grid gap-8">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border">
                    <div className="grid gap-6 md:grid-cols-3">
                      <Skeleton className="h-48 w-full md:h-full" />
                      <div className="md:col-span-2 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Skeleton className="h-6 w-24" />
                          <Skeleton className="h-5 w-32" />
                        </div>
                        <Skeleton className="mb-4 h-8 w-full" />
                        <Skeleton className="mb-4 h-20 w-full" />
                        <Skeleton className="h-8 w-40" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Skeleton className="h-10 w-40" />
            </div>
          </div>

          <div>
            <div className="rounded-xl border p-6">
              <Skeleton className="mb-4 h-8 w-40" />
              <div className="space-y-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i}>
                      <div className="flex items-start gap-4">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <div className="flex-1">
                          <Skeleton className="h-6 w-full" />
                          <div className="mt-1 flex items-center gap-4">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                        </div>
                      </div>
                      {i < 4 && <Skeleton className="my-4 h-px w-full" />}
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border p-6">
              <Skeleton className="mb-4 h-8 w-32" />
              <div className="space-y-2">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <Skeleton className="h-6 w-32" />
                      <Skeleton className="h-6 w-10" />
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border p-6">
              <Skeleton className="mb-4 h-8 w-40" />
              <Skeleton className="mb-4 h-16 w-full" />
              <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
