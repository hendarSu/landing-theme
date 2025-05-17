import { Skeleton } from "@/components/ui/skeleton"
import { TabsNavigation } from "@/components/tabs-navigation"

export default function AnggotaLoading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-6">
        <Skeleton className="h-10 w-64 mb-4" />
        <Skeleton className="h-4 w-full max-w-3xl mb-2" />
        <Skeleton className="h-4 w-full max-w-2xl" />
      </div>

      <TabsNavigation />

      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-8 w-40" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-20" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md">
              <Skeleton className="h-48 w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-1" />
                <Skeleton className="h-4 w-2/3 mb-1" />
                <Skeleton className="h-4 w-1/2 mb-1" />
                <Skeleton className="h-4 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-4" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-8">
        <Skeleton className="h-10 w-48" />
      </div>
    </main>
  )
}
