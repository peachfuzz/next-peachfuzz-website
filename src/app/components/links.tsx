import Link from 'next/link';

export function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      href={`https://${href}`}
      target="_blank"
    >
      {label}
    </a>
  );
}

export function InternalLink({ href, label }: { href: string; label: string }) {
  return (
    <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500" href={href}>
      {label}
    </Link>
  );
}
