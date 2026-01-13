import { Skeleton, SkeletonCard, SkeletonSpeaker } from "@/components/ui/skeleton";
import { Navigation } from "@/components/Navigation";

interface PageLoaderProps {
  type?: "default" | "speakers" | "schedule" | "cards";
}

export const PageLoader = ({ type = "default" }: PageLoaderProps) => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Skeleton */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Skeleton className="h-4 w-32 mx-auto" />
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
        </div>
      </section>

      {/* Content Skeleton based on type */}
      <section className="py-12">
        <div className="container">
          {type === "speakers" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonSpeaker key={i} />
              ))}
            </div>
          )}

          {type === "schedule" && (
            <div className="max-w-4xl mx-auto space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-border/50">
                  <Skeleton className="h-16 w-24 rounded-lg shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === "cards" && (
            <div className="grid md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {type === "default" && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-32 rounded-xl" />
                ))}
              </div>
              <div className="max-w-2xl mx-auto space-y-4">
                <Skeleton className="h-8 w-1/2 mx-auto" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
