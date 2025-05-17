import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section Skeleton */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted bg-opacity-50 relative overflow-hidden">
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-20 w-full max-w-[700px] mx-auto" />
          </div>
        </div>
      </section>

      {/* About Tabs Skeleton */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <Skeleton className="h-10 w-full max-w-md mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Skeleton className="h-10 w-48 mb-4" />
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            </div>
            <Skeleton className="h-[400px] w-full rounded-lg" />
          </div>

          <div className="mt-12">
            <Skeleton className="h-8 w-48 mb-4" />
            <div className="space-y-6">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <Skeleton className="w-24 h-8" />
                    <div className="flex-1">
                      <Skeleton className="h-6 w-48 mb-2" />
                      <Skeleton className="h-16 w-full" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
