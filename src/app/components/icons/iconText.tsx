export function IconText({ sectionOne, sectionTwo }: { sectionOne: JSX.Element; sectionTwo: JSX.Element }) {
  return (
    <div className="relative h-12 w-60 mx-auto">
      <div className="absolute inset-x-0 bottom-0 h-16 flex justify-center items-center space-x-1">
        {sectionOne}
        {sectionTwo}
      </div>
    </div>
  );
}
