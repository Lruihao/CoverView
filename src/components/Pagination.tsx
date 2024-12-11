/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

function ArrowLeftIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
      <path clipRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" fillRule="evenodd" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
      <path clipRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" fillRule="evenodd" />
    </svg>
  )
}

interface PaginationProps {
  page: number
  pageSize: number
  total: number
  pagerCount: number
  pagination: (page: number) => void
  className?: string
}

function Pagination({ page, pageSize, total, pagerCount, pagination, className }: PaginationProps) {
  const { t } = useTranslation()
  const totalPages = useMemo(
    () => Math.ceil(total / pageSize),
    [total, pageSize],
  )
  const pagerCountActual = useMemo(
    () => Math.max(0, Math.min(pagerCount, totalPages) - 2),
    [totalPages, pagerCount],
  )

  return (
    <div className={`hidden sm:flex sm:items-center sm:justify-between bg-white p-2 h-max w-full shrink-0 ${className}`}>
      <div>
        <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: t('pagination.summary', { page, totalPages, total }) }} />
      </div>
      <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
        <button
          type="button"
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          disabled={page === 1}
          title={t('pagination.prev')}
          onClick={() => pagination(page - 1)}
        >
          <ArrowLeftIcon />
        </button>
        {Array.from({ length: pagerCountActual }, (_, i) => i + 1).map(item => (
          <button
            type="button"
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-indigo-400 hover:text-white focus:z-20 focus:outline-offset-0 ${item === page ? 'bg-indigo-400 text-white' : 'text-gray-900'}`}
            disabled={item === page}
            key={item}
            onClick={() => pagination(item)}
          >
            {item}
          </button>
        ))}
        {totalPages > pagerCountActual && pagerCountActual > 0 && <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>}
        {totalPages > pagerCountActual && pagerCountActual > 0 && (
          <button
            type="button"
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-indigo-400 hover:text-white focus:z-20 focus:outline-offset-0 ${totalPages === page ? 'bg-indigo-400 text-white' : 'text-gray-900'}`}
            disabled={page === totalPages}
            onClick={() => pagination(totalPages)}
          >
            {totalPages}
          </button>
        )}
        <button
          type="button"
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          disabled={page === totalPages}
          title={t('pagination.next')}
          onClick={() => pagination(page + 1)}
        >
          <ArrowRightIcon />
        </button>
      </nav>
    </div>

  )
}

export default Pagination
