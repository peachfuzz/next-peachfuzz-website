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
    <div className="grid grid-flow-row-dense grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 text-center">
      {countryData.map(({ name, abbreviation, hovered, visited }, index) => (
        <div
          data-state={abbreviation}
          key={abbreviation}
          onMouseEnter={() => onHover(index)}
          onMouseLeave={() => onHover(index)}
          style={{ color: getColor(hovered, visited) }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
