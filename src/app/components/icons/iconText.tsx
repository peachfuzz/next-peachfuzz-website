export function IconText({ sectionOne, sectionTwo }: { sectionOne: JSX.Element; sectionTwo: JSX.Element }) {
  return (
    <div className="flex flex-col relative h-full w-80 mx-auto">
      <div className="inset-x-0 bottom-0 flex justify-center items-center space-x-1">
        {sectionOne}
        {sectionTwo}
      </div>
    </div>
  );
}
