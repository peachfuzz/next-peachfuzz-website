'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const focusedLinkClassName = 'bg-gray-900 text-white rounded-md px-3 py-2 font-medium';
const unfocusedLinkClassName = 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium';
const getLinkTypeClassName = (path: string, pathName: string) =>
  path === pathName ? focusedLinkClassName : unfocusedLinkClassName;

const linkData = [
  {
    pageName: 'Home',
    pathName: '/',
  },
  {
    pageName: 'Calculator',
    pathName: '/calculator',
  },
  {
    pageName: 'Travel',
    pathName: '/travel',
  },
];

{
  /* todo: add aria-current to all links(?) */
}
const getLinks = (cssClasses: string, pathName: string) => (
  <>
    {linkData.map((data) => (
      <Link
        className={`${getLinkTypeClassName(data.pathName, pathName)} ${cssClasses}`}
        href={data.pathName}
        key={data.pathName}
        replace
      >
        {data.pageName}
      </Link>
    ))}
  </>
);

export function Header() {
  const pathName = usePathname();
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            {/* todo: get open/close to work for mobile menu */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
                        Icon when menu is closed.
                        Menu open: "hidden", Menu closed: "block"
                    --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* <!--
                        Icon when menu is open.
                        Menu open: "block", Menu closed: "hidden"
                    --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="block h-8 w-auto lg:hidden"
                src="/favicon.ico"
                alt="Hector at Dumbo"
                width={30}
                height={30}
                priority
              />
              <Image
                className="hidden h-8 w-auto lg:block"
                src="/favicon.ico"
                alt="Hector at Dumbo"
                width={30}
                height={30}
                priority
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">{getLinks('text-sm', pathName)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">{getLinks('text-base block', pathName)}</div>
      </div>
    </nav>
  );
}
