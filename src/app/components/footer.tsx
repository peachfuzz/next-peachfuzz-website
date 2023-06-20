'use client';
import { usePathname } from 'next/navigation';
import { ExternalLink, InternalLink } from './links';
import { IconToolTip } from './iconToolTip';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from './icons/socialMediaIcons';
import { IconText } from '../components/icons/iconText';
import { CodeBracketSquareIcon } from '../components/icons/heroIcons';

const getCodeUrl = (pathName: string) => {
  return `https://github.com/peachfuzz/next-peachfuzz-website/tree/main/src/app${pathName}/page.tsx`;
};

export function Footer() {
  const pathName = usePathname();
  const externalLink = <ExternalLink href="https://nextjs.org" label="Next.js" />;
  const internalLink = <InternalLink href="/blueprint" label="here" />;
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
      <footer className="sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8">
        <div className="mb-4 text-sm text-center sm:mb-0 select-all">
          This page was made with {externalLink}. Click {internalLink} to learn more!
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
