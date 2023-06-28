export function IconText({ sectionOne, sectionTwo }: { sectionOne: JSX.Element; sectionTwo: JSX.Element }) {
  return (
    <div className="relative mx-auto flex h-full flex-col">
      <div className="inset-x-0 bottom-0 flex items-center justify-center space-x-1">
        {sectionOne}
        {sectionTwo}
      </div>
    </div>
  );
}
