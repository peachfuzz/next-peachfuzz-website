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
        className="inline-flex justify-center p-2 rounded-lg cursor-pointer dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        {icon}
        <span className="sr-only">{iconName}</span>
      </a>
      <div
        id={`tooltip-${iconName}`}
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
      >
        {toolTip}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
}
