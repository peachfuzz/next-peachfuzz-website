export function IconText({ sectionOne, sectionTwo }: { sectionOne: JSX.Element; sectionTwo: JSX.Element }) {
  return (
    <div className="flex flex-col relative h-full w-56 mx-auto">
      <div className="inset-x-0 bottom-0 flex items-center space-x-1">
        {sectionOne}
        {sectionTwo}
      </div>
    </div>
  );
}
