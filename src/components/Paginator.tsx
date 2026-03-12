import Link from 'next/link';

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
};

const pageLink = (page: number, current: boolean) => (
  <Link
    key={page}
    href={`/planets?page=${page}`}
    className={`min-h-9.5 min-w-9.5 py-2 px-3 inline-flex justify-center items-center text-sm rounded-lg ${
      current
        ? 'border border-white text-white pointer-events-none'
        : 'text-white/70 hover:bg-white/10'
    }`}
  >
    {page}
  </Link>
);

const dots = (key: string) => (
  <span key={key} className="py-2 px-1.5 text-sm text-white/50">...</span>
);

export default function Paginator({ currentPage, totalPages }: PaginatorProps) {
  if (totalPages <= 1) return null;

  const pages: React.ReactNode[] = [];

  if (currentPage > 2) {
    pages.push(pageLink(1, false));
  }
  if (currentPage > 3) {
    pages.push(dots('dots-start'));
  }

  if (currentPage > 1) {
    pages.push(pageLink(currentPage - 1, false));
  }

  pages.push(pageLink(currentPage, true));

  if (currentPage < totalPages) {
    pages.push(pageLink(currentPage + 1, false));
  }

  if (currentPage < totalPages - 2) {
    pages.push(dots('dots-end'));
  }

  if (currentPage < totalPages - 1) {
    pages.push(pageLink(totalPages, false));
  }

  return (
    <nav className="flex justify-between items-center gap-x-1 mt-4" aria-label="Pagination">
      <Link
        href={`/planets?page=${currentPage - 1}`}
        aria-disabled={currentPage === 1}
        aria-label="Previous"
        className={`min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-white hover:bg-white/10 ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        <span aria-hidden="true" className="hidden sm:block">Předchozí</span>
      </Link>

      <div className="flex items-center gap-x-1">
        {pages}
      </div>

      <Link
        href={`/planets?page=${currentPage + 1}`}
        aria-disabled={currentPage === totalPages}
        className={`min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-white hover:bg-white/10 ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <span aria-hidden="true" className="hidden sm:block">Další</span>
        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </nav>
  );
}
