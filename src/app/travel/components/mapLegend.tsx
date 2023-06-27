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
    <div
      className={
        'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 ' +
        'bg-gray-800 rounded-lg p-3 place-items-center'
      }
    >
      {countryData.map(({ name, abbreviation, hovered, visited }, index) => (
        <div
          data-state={abbreviation}
          key={abbreviation}
          onMouseEnter={() => onHover(index)}
          onMouseLeave={() => onHover(index)}
          className={`text-${getColor(hovered, visited)} max-w-min text-center`}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
