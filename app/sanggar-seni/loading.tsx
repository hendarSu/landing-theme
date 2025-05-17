import { Skeleton } from "@/components/ui/skeleton"
import { TabsNavigation } from "@/components/tabs-navigation"

export default function SanggarSeniLoading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Skeleton className="h-10 w-3/4 max-w-md mx-auto mb-6" />
      <Skeleton className="h-20 w-full max-w-3xl mx-auto mb-8" />

      <TabsNavigation />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden shadow-md">
              <Skeleton className="aspect-video w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-16 w-full mb-4" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  )
}
