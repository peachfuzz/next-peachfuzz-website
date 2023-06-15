import Link from 'next/link';

export function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={href} target="_blank">
      {label}
    </a>
  );
}

export function InternalLink({ href, label }: { href: string; label: string }) {
  return (
    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={href} replace>
      {label}
    </Link>
  );
}