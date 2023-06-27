import { UpdatedMapEntry } from '../../types/mapDataTypes';
import { getColor } from '../../utils/utils';

export function Map({
  countryData,
  onHover,
  capitalLocation = <></>,
  viewBox,
}: {
  countryData: UpdatedMapEntry[];
  onHover: (index: number) => void;
  capitalLocation?: JSX.Element;
  viewBox: string;
}) {
  return (
    <div className="w-2/3">
      <svg height="100%" viewBox={viewBox}>
        <g>
          {countryData.map(({ abbreviation, drawing, hovered, visited }, index) => (
            <path
              id={abbreviation}
              className={`fill-${getColor(hovered, visited)}`}
              d={drawing}
              onMouseEnter={() => onHover(index)}
              onMouseLeave={() => onHover(index)}
              key={abbreviation}
            />
          ))}
          {capitalLocation}
        </g>
      </svg>
    </div>
  );
}
