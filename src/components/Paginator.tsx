import Link from 'next/link';

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
};

export default function Paginator({ currentPage, totalPages }: PaginatorProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center gap-x-1" aria-label="Pagination">
      <Link
        href={`/planets?page=${currentPage - 1}`}
        aria-disabled={currentPage === 1}
        aria-label="Previous"
        className={`min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-foreground hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        <span aria-hidden="true" className="hidden sm:block">Předchozí</span>
      </Link>

      <div className="flex items-center gap-x-1">
        <span className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-line-2 text-foreground py-2 px-3 text-sm rounded-lg">
          {currentPage}
        </span>
        <span className="min-h-9.5 flex justify-center items-center text-muted-foreground-1 py-2 px-1.5 text-sm">of</span>
        <span className="min-h-9.5 flex justify-center items-center text-muted-foreground-1 py-2 px-1.5 text-sm">{totalPages}</span>
      </div>

      <Link
        href={`/planets?page=${currentPage + 1}`}
        aria-disabled={currentPage === totalPages}
        className={`min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-foreground hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <span aria-hidden="true" className="hidden sm:block">Další</span>
        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </nav>
  );
}