import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function LoginLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pepadi-gold/10 via-white to-pepadi-brown/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back link skeleton */}
        <div className="mb-6">
          <Skeleton className="h-4 w-32" />
        </div>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-4 text-center">
            {/* Logo skeleton */}
            <div className="flex justify-center">
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-8 w-48 mx-auto" />
              <Skeleton className="h-4 w-64 mx-auto" />
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Email field skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-11 w-full" />
            </div>

            {/* Password field skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-11 w-full" />
            </div>

            {/* Remember me and forgot password skeleton */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-4 w-24" />
            </div>

            {/* Login button skeleton */}
            <Skeleton className="h-11 w-full" />

            {/* Register link skeleton */}
            <div className="text-center">
              <Skeleton className="h-4 w-48 mx-auto" />
            </div>
          </CardContent>
        </Card>

        {/* Terms skeleton */}
        <div className="mt-6 text-center">
          <Skeleton className="h-3 w-80 mx-auto" />
        </div>
      </div>
    </div>
  )
}
