// todo: create beautiful page linking all resources used

import { NextJsIcon, TailwindCssIcon, TypeScriptIcon } from '../components/icons/blueprintIcons';
import { LogoSection } from './components/logoSection';

/*
Vercel
Hero Icons
Wikipedia icons
https://paintmaps.com/
 */
export default function Blueprint() {
  return (
    <main className="mb-auto flex flex-col items-center p-6 md:p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <LogoSection
          title="NextJs"
          logo={<NextJsIcon />}
          message="Next Js is the React framework used to build this website."
        />
        <LogoSection
          title="tailwind"
          logo={<TailwindCssIcon />}
          message="Tailwind CSS is the CSS library used to style this website."
        />
        <LogoSection title="TypeScript" logo={<TypeScriptIcon />} message="TypeScript is used type this website." />
        {/* <LogoSection title="Vercel" /> */}
      </div>
    </main>
  );
}
