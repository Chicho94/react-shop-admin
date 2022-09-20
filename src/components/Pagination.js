import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

export default function Pagination({ quantity, setOffset, offset }) {
  const paginationHandler = (action) => {
    let page = action === 'next' ? offset + quantity : offset - quantity;
    setOffset(page);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={() => {
            paginationHandler('previus');
          }}
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          onClick={() => {
            paginationHandler('next');
          }}
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm gap-8" aria-label="Pagination">
            <a
              onClick={() => {
                paginationHandler('previus');
              }}
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              <span className="leading-tight">PREVIOUS</span>
            </a>
            <a
              onClick={() => {
                paginationHandler('next');
              }}
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="leading-tight">NEXT</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
