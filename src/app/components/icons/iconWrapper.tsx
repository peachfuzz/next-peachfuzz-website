import { JSX } from 'react';

const BaseIconWrapper = (children: JSX.Element, props = {}) => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" {...props}>
    {children}
  </svg>
);

export const SocialMediaIconWrapper = (children: JSX.Element) =>
  BaseIconWrapper(children, { fill: 'currentColor', className: 'h-5 w-5' });

export const HeroIconWrapper = (children: JSX.Element, props = {}) =>
  BaseIconWrapper(children, { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, ...props });
