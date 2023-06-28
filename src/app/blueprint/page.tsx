import {
  GitIcon,
  GitHubIcon,
  NextJsIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VercelIcon,
} from '../components/icons/blueprintIcons';
import { HeroIconsIcon, WrenchScrewdriverIcon } from '../components/icons/heroIcons';
import { LogoSection } from './components/logoSection';

/*
Wikipedia map
https://paintmaps.com/
 */
export default function Blueprint() {
  return (
    <main className="mb-auto flex flex-col items-center p-6 md:p-24">
      <div className="flex space-x-2">
        <h1 className="text-5xl">Blueprint</h1>
        <WrenchScrewdriverIcon width="55px" />
      </div>
      <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        <LogoSection logo={<NextJsIcon />} messageStart="Built with" href="nextjs.org" linkLabel="Next.js" />
        <LogoSection
          logo={<TailwindCssIcon />}
          messageStart="Styled with"
          href="tailwindcss.com"
          linkLabel="Tailwind CSS"
        />
        <LogoSection logo={<VercelIcon />} messageStart="Hosted on" href="vercel.com" linkLabel="Vercel" />
        <LogoSection
          logo={<TypeScriptIcon />}
          messageStart="Typed with"
          href="www.typescriptlang.org"
          linkLabel="TypeScript"
        />
        <LogoSection logo={<GitHubIcon />} messageStart="Code stored on" href="github.com" linkLabel="GitHub" />

        <LogoSection logo={<GitIcon />} messageStart="Code managed with" href="git-scm.com" linkLabel="Git" />
        <LogoSection
          logo={<HeroIconsIcon width="225px" />}
          messageStart="Non-brand icons borrowed from"
          href="heroicons.dev"
          linkLabel="Hero Icons"
        />
      </div>
    </main>
  );
}
