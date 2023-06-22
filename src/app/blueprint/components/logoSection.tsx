import { IconText } from '@/app/components/icons/iconText';
import { ExternalLink } from '@/app/components/links';

export function LogoSection({
  href,
  linkLabel,
  logo,
  messageStart,
}: {
  href: string;
  linkLabel: string;
  logo: JSX.Element;
  messageStart: string;
}) {
  const message = (
    <p>
      {messageStart} <ExternalLink href={href} label={linkLabel} />
    </p>
  );
  return (
    <div className="not-prose relative bg-slate-50 rounded-xl dark:bg-gray-800">
      <div className="flex sm:block sm:overflow-visible">
        <div className="flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold p-4">
          <IconText sectionOne={logo} sectionTwo={message} />
        </div>
      </div>
    </div>
  );
}
