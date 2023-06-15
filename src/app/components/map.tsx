import { UpdatedMapEntry } from '../types/mapDataTypes';
import { getColor } from '../utils/utils';

export function Map({ stateData, onHover }: { stateData: UpdatedMapEntry[]; onHover: (index: number) => void }) {
  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
      <svg viewBox="0 0 959 593" className="svg-states">
        <title>U.S. States</title>
        <g id="states">
          {stateData.map(({ abbreviation, d, hovered, visited }, index) => (
            <path
              id={abbreviation}
              fill={getColor(hovered, visited)}
              d={d}
              onMouseEnter={() => onHover(index)}
              onMouseLeave={() => onHover(index)}
              key={abbreviation}
            />
          ))}
          {/* todo: add function for dc data */}
          <circle id="DC" fill="#037ffc" stroke="#000000" strokeWidth="1.5" cx="801.3" cy="251.8" r="5" />
        </g>
        <path
          id="frames"
          fill="none"
          stroke="#A9A9A9"
          strokeWidth="2"
          d="M215,493v55l36,45 M0,425h147l68,68h85l54,54v46"
        />
      </svg>
    </div>
  );
}
