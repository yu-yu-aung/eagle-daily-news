
const ArticleListLoadingSkeleton = () => {
  return (
    <>
      {/* Mobile UI Skeleton */}
      <div className="px-4 flex flex-col gap-6 md:hidden lg:hidden">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="h-32 bg-gray-200 animate-pulse rounded-lg"></div>
        ))}
      </div>

      {/* Tablet UI Skeleton */}
      <div className="hidden sm:grid sm:px-8 grid-cols-2 gap-6 lg:hidden">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="h-40 bg-gray-200 animate-pulse rounded-lg"></div>
        ))}
      </div>

      {/* Desktop UI Skeleton */}
      <div className="hidden lg:block lg:px-24 py-10 space-y-16">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-7 flex flex-col gap-6">
            <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="flex gap-6">
              <div className="h-32 bg-gray-200 animate-pulse rounded-lg flex-1"></div>
              <div className="h-32 bg-gray-200 animate-pulse rounded-lg flex-1"></div>
            </div>
          </div>
          <div className="col-span-5 flex flex-col gap-6 justify-between">
            <div className="h-48 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="h-48 bg-gray-200 animate-pulse rounded-lg"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5 flex flex-col gap-6 justify-between">
            <div className="h-48 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="h-48 bg-gray-200 animate-pulse rounded-lg"></div>
          </div>
          <div className="col-span-7 flex flex-col gap-6">
            <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="flex gap-6">
              <div className="h-32 bg-gray-200 animate-pulse rounded-lg flex-1"></div>
              <div className="h-32 bg-gray-200 animate-pulse rounded-lg flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleListLoadingSkeleton