'use client';
import { useState } from 'react';
import { Map } from './map';
import { UpdatedMapEntry } from '../../types/mapDataTypes';
import { MapLegend } from './mapLegend';

export function Country({
  countryIndex,
  data,
  name,
  capitalLocation = <></>,
  viewBox,
  translate = false,
}: {
  countryIndex: number;
  data: UpdatedMapEntry[];
  name: string;
  capitalLocation?: JSX.Element;
  viewBox: string;
  translate?: boolean;
}) {
  const [updatedCountryData, setUpdatedCountryData] = useState<UpdatedMapEntry[]>(data);

  const updateStateData = (index: number) => {
    const newHoveredValue = !updatedCountryData[index].hovered;
    let newStateData = [...updatedCountryData];
    newStateData[index].hovered = newHoveredValue;
    setUpdatedCountryData(newStateData);
  };

  return (
    <div className="mt-6 flex flex-col items-center space-y-4" translate={translate ? 'yes' : 'no'} key={countryIndex}>
      <div className="mt-6 text-3xl" id={name}>
        {name}
      </div>
      <Map
        countryData={updatedCountryData}
        onHover={updateStateData}
        capitalLocation={capitalLocation}
        viewBox={viewBox}
      />
      <p>States visited: {data.reduce((acc, cur) => (cur.visited ? ++acc : acc), 0)}</p>
      <MapLegend countryData={updatedCountryData} onHover={updateStateData} />
    </div>
  );
}
