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
    <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
      <Link
        href={`/planets?page=${currentPage - 1}`}
        aria-disabled={currentPage === 1}
        style={{
          pointerEvents: currentPage === 1 ? 'none' : 'auto',
          opacity: currentPage === 1 ? 0.5 : 1,
        }}
      >
        Předchozí
      </Link>

      <span>
        {currentPage} / {totalPages}
      </span>

      <Link
        href={`/planets?page=${currentPage + 1}`}
        aria-disabled={currentPage === totalPages}
        style={{
          pointerEvents: currentPage === totalPages ? 'none' : 'auto',
          opacity: currentPage === totalPages ? 0.5 : 1,
        }}
      >
        Další
      </Link>
    </div>
  );
}