import { IconText } from '@/app/components/icons/iconText';

export function LogoSection({ title, logo, message }: { title: string; logo: JSX.Element; message: string }) {
  return (
    <div className="not-prose relative bg-slate-50 rounded-xl dark:bg-gray-800">
      <div className="flex sm:block sm:overflow-visible">
        <div className="flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold p-4">
          <IconText sectionOne={logo} sectionTwo={<p>{message}</p>} />
        </div>
      </div>
    </div>
  );
}
