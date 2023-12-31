'use client';
import { usePathname } from 'next/navigation';
import { ExternalLink, InternalLink } from './links';
import { IconToolTip } from './iconToolTip';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './icons/socialMediaIcons';
import { IconText } from '../components/icons/iconText';
import { CodeBracketSquareIcon } from '../components/icons/heroIcons';

const getCodeUrl = (pathName: string) => {
  return `github.com/peachfuzz/next-peachfuzz-website/tree/main/src/app${pathName}/page.tsx`;
};

export function Footer() {
  const pathName = usePathname();
  const externalLink = <ExternalLink href="nextjs.org" label="Next.js" />;
  const internalLink = <InternalLink href="/blueprint" label="here" />;
  return (
    <>
      <div>
        <IconText
          sectionOne={
            <p>
              Take a look at <ExternalLink href={getCodeUrl(pathName)} label="the code" />
            </p>
          }
          sectionTwo={<CodeBracketSquareIcon width="25px" />}
        />
      </div>
      <footer className="p-4 sm:flex sm:items-center sm:justify-between sm:p-6 xl:p-8">
        <div className="mb-4 select-all text-center text-sm sm:mb-0">
          This website was built with {externalLink}. Click {internalLink} to learn more!
        </div>
        <div className="flex items-center justify-center space-x-1">
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
