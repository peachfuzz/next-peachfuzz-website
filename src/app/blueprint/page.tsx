// todo: create beautiful page linking all resources used
import {
  GitIcon,
  GitHubIcon,
  NextJsIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VercelIcon,
} from '../components/icons/blueprintIcons';
import { LogoSection } from './components/logoSection';

/*
Hero Icons
Wikipedia icons
https://paintmaps.com/
 */
export default function Blueprint() {
  return (
    <main className="mb-auto flex flex-col items-center p-6 md:p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <LogoSection logo={<NextJsIcon />} message="Built with Next.js" />
        <LogoSection logo={<TailwindCssIcon />} message="Styled with Tailwind CSS" />
        <LogoSection logo={<VercelIcon />} message="Hosted on Vercel" />
        <LogoSection logo={<TypeScriptIcon />} message="Typed with TypeScript" />
        <LogoSection logo={<GitHubIcon />} message="Code stored on GitHub" />
        <LogoSection logo={<GitIcon />} message="Code managed with Git" />
      </div>
    </main>
  );
}
