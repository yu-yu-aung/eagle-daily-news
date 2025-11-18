
const ArticleListLoadingSkeleton = () => {
  return (
    <div className="px-24 py-16 space-y-16 animate-pulse">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-7 flex flex-col gap-6">
            <div className="bg-gray-300 h-64 rounded-lg"></div>
            <div className="flex gap-6">
              <div className="bg-gray-300 h-32 flex-1 rounded-lg"></div>
              <div className="bg-gray-300 h-32 flex-1 rounded-lg"></div>
            </div>
          </div>
          <div className="col-span-5 flex flex-col gap-6 justify-between">
            <div className="bg-gray-300 h-40 rounded-lg"></div>
            <div className="bg-gray-300 h-40 rounded-lg"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5 flex flex-col gap-6 justify-between">
            <div className="bg-gray-300 h-40 rounded-lg"></div>
            <div className="bg-gray-300 h-40 rounded-lg"></div>
          </div>
          <div className="col-span-7 flex flex-col gap-6">
            <div className="bg-gray-300 h-64 rounded-lg"></div>
            <div className="flex gap-6">
              <div className="bg-gray-300 h-32 flex-1 rounded-lg"></div>
              <div className="bg-gray-300 h-32 flex-1 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ArticleListLoadingSkeleton