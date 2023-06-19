import { JSX } from 'react';

const IconWrapper = (children: JSX.Element, props = {}) => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    {children}
  </svg>
);

export const SocialMediaIconWrapper = (children: JSX.Element) =>
  IconWrapper(children, { fill: 'currentColor', className: 'h-5 w-5', viewBox: '0 0 24 24' });

export const HeroIconWrapper = (children: JSX.Element, props = {}) =>
  IconWrapper(children, { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, viewBox: '0 0 24 24', ...props });

export const BlueprintIconWrapper = (children: JSX.Element, props = {}) =>
  IconWrapper(children, {
    className: 'h-24 max-w-md flex-no-shrink fill-current pr-2',
    ...props,
  });
