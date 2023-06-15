'use client';
import { usePathname } from 'next/navigation';
import { ExternalLink, InternalLink } from './links';
import { IconToolTip } from './iconToolTip';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './icons/socialMediaIcons';
import { IconText } from '../components/icons/iconText';
import { CodeBracketSquareIcon } from '../components/icons/heroIcons';
import { getCodeUrl } from '../utils/utils';

export function Footer() {
  const pathName = usePathname();
  return (
    <>
      <div className="">
        <IconText
          sectionOne={
            <p>
              Take a look at <ExternalLink href={getCodeUrl(pathName)} label="the code" />
            </p>
          }
          sectionTwo={<CodeBracketSquareIcon width="25px" />}
        />
      </div>
      {/* todo: add line */}
      <footer className="sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8">
        {/* todo: add link to code once everything is done and published */}
        {/* todo: make link stay sticky to bottom */}
        {/* <p className="mb-4 text-sm text-center sm:mb-0">
          This website was made with <ExternalLink href="https://nextjs.org" label="Next.js" />, styled with{' '}
          <ExternalLink href="https://tailwindcss.com" label="Tailwind CSS" /> and hosted on{' '}
          <ExternalLink href="https://pages.github.com" label="Github Pages" />.
        </p> */}
        <div className="mb-4 text-sm text-center sm:mb-0 select-none">
          This page was made with <ExternalLink href="https://nextjs.org" label="Next.js" />. Click{' '}
          <InternalLink href="/blueprint" label="here" /> to learn more!
        </div>
        <div className="flex justify-center items-center space-x-1">
          <IconToolTip
            href="https://github.com/peachfuzz"
            icon={<GitHubIcon />}
            iconName="GitHub"
            toolTip="Star us on GitHub!"
          />
          <IconToolTip
            href="https://www.instagram.com/somemehican"
            icon={<InstagramIcon />}
            iconName="Instagram"
            toolTip="Like us on Instagram!"
          />
          <IconToolTip
            href="https://www.linkedin.com/in/hdm"
            icon={<LinkedInIcon />}
            iconName="LinkedIn"
            toolTip="Add us on LinkedIn!"
          />
        </div>
      </footer>
    </>
  );
}
