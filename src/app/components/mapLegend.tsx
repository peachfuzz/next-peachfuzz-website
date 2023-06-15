import { UpdatedMapEntry } from '../types/mapDataTypes';
import { getColor } from '../utils/utils';

export function MapLegend({
  stateData,
  updateStateData,
}: {
  stateData: UpdatedMapEntry[];
  updateStateData: (index: number) => void;
}) {
  /* todo: by cols - grid-rows-10 */
  /* todo: by rows - grid-cols-5 */
  return (
    <div className="grid grid-cols-5 gap-4">
      {stateData.map(({ name, abbreviation, hovered, visited }, index) => (
        <div
          data-state={abbreviation}
          key={abbreviation}
          onMouseEnter={() => updateStateData(index)}
          onMouseLeave={() => updateStateData(index)}
          style={{ color: getColor(hovered, visited) }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
