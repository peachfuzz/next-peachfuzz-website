// todo: figure out why tooltip isn't working
export function IconToolTip({
  href,
  icon,
  iconName,
  toolTip,
}: {
  href: string;
  icon: JSX.Element;
  iconName: string;
  toolTip: string;
}) {
  return (
    <>
      {/* todo: update to externalLink */}
      <a
        href={href}
        target="_blank"
        data-tooltip-target={`tooltip-${iconName}`}
        className="inline-flex cursor-pointer justify-center rounded-lg p-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {icon}
        <span className="sr-only">{iconName}</span>
      </a>
      <div
        id={`tooltip-${iconName}`}
        role="tooltip"
        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
      >
        {toolTip}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
}
