import { UpdatedMapEntry } from '../../types/mapDataTypes';
import { getColor } from '../../utils/utils';

export function MapLegend({
  countryData,
  onHover,
}: {
  countryData: UpdatedMapEntry[];
  onHover: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-3 place-items-center gap-4 rounded-lg bg-slate-200 p-3 dark:bg-gray-950 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
      {countryData.map(({ name, abbreviation, hovered, visited }, index) => (
        <div
          data-state={abbreviation}
          key={abbreviation}
          onMouseEnter={() => onHover(index)}
          onMouseLeave={() => onHover(index)}
          className={`max-w-min p-2 text-center text-${getColor(hovered, visited, true)}`}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
