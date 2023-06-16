import { UpdatedMapEntry } from '../types/mapDataTypes';
import { getColor } from '../utils/utils';

export function Map({
  countryData,
  onHover,
  capitalLocation = <></>,
}: {
  countryData: UpdatedMapEntry[];
  onHover: (index: number) => void;
  capitalLocation?: JSX.Element;
}) {
  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
      <svg viewBox="0 0 959 593" className="svg-states">
        <title>U.S. States</title>
        <g id="states">
          {countryData.map(({ abbreviation, d, hovered, visited }, index) => (
            <path
              id={abbreviation}
              fill={getColor(hovered, visited)}
              d={d}
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
