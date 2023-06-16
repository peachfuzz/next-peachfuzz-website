import { UpdatedMapEntry } from '../types/mapDataTypes';
import { getColor } from '../utils/utils';

export function MapLegend({
  countryData,
  onHover,
}: {
  countryData: UpdatedMapEntry[];
  onHover: (index: number) => void;
}) {
  /* todo: by cols - grid-rows-10 */
  /* todo: by rows - grid-cols-5 */
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
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
