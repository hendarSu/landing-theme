import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DalangLoading() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-72 mt-2" />
        </div>
        <Skeleton className="h-9 w-36" />
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>
            <Skeleton className="h-5 w-32" />
          </CardTitle>
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-full md:w-[180px]" />
            <Skeleton className="h-10 w-full md:w-[120px]" />
          </div>

          <div className="rounded-md border">
            <div className="p-4">
              <div className="flex items-center space-x-4 py-4">
                <Skeleton className="h-5 w-8" />
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-5 flex-1" />
                <Skeleton className="h-5 w-24 hidden md:block" />
                <Skeleton className="h-5 w-32 hidden md:block" />
                <Skeleton className="h-5 w-40 hidden lg:block" />
                <Skeleton className="h-5 w-24 hidden lg:block" />
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-8 w-8" />
              </div>

              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4 py-4">
                  <Skeleton className="h-5 w-8" />
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <Skeleton className="h-5 flex-1" />
                  <Skeleton className="h-5 w-24 hidden md:block" />
                  <Skeleton className="h-5 w-32 hidden md:block" />
                  <Skeleton className="h-5 w-40 hidden lg:block" />
                  <Skeleton className="h-5 w-24 hidden lg:block" />
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-8 w-8" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <Skeleton className="h-4 w-48" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
