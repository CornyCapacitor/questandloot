import { TabButton } from "../ui/TabButton"

export const Tabs = ({ setCurrentPage, currentPage, totalPages }: { setCurrentPage: (page: number) => void, currentPage: number, totalPages: number }) => {
  return (
    <div className="w-full flex items-center gap-2 px-4 border-b border-slate-700">
      {/* First page */}
      <TabButton
        tabName="1"
        onClick={() => setCurrentPage(1)}
        currentTab={currentPage}
        disabled={currentPage <= 2}
        className={`${currentPage <= 2 ? 'hidden' : ''} min-w-[40px]`}
      />

      {totalPages >= 6 && currentPage >= 4 && (
        <span className="min-w-[40px] text-center">...</span>
      )}

      {/* Previous page */}
      <TabButton
        tabName={`${currentPage - 1}`}
        onClick={() => setCurrentPage(currentPage - 1)}
        currentTab={currentPage}
        disabled={currentPage <= 1}
        className={`${currentPage <= 1 ? 'hidden' : ''} min-w-[40px]`}
      />

      {/* Current page */}
      <TabButton
        tabName={`${currentPage}`}
        onClick={() => { }}
        currentTab={currentPage}
        className="bg-slate-600 min-w-[40px]"
      />

      {/* Next page */}
      <TabButton
        tabName={`${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
        currentTab={currentPage}
        disabled={currentPage === totalPages}
        className={`${currentPage < totalPages ? '' : 'hidden'} min-w-[40px]`}
      />

      {totalPages >= 6 && totalPages - 2 != currentPage && currentPage != totalPages && currentPage + 1 != totalPages && (
        <span className="min-w-[40px] text-center">...</span>
      )}

      {/* Last page */}
      <TabButton
        tabName={`${totalPages}`}
        onClick={() => setCurrentPage(totalPages)}
        currentTab={currentPage}
        disabled={currentPage === totalPages}
        className={`${currentPage < totalPages - 1 ? '' : 'hidden'} min-w-[40px]`}
      />
    </div>
  )
}