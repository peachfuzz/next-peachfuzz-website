import { useState } from 'react';
import { Map } from '../components/map';
import { UpdatedMapEntry } from '../types/mapDataTypes';
import { MapLegend } from '../components/mapLegend';

export function Country({
  data,
  name,
  capitalLocation,
}: {
  data: UpdatedMapEntry[];
  name: string;
  capitalLocation: JSX.Element;
}) {
  const [updatedCountryData, setUpdatedCountryData] = useState<UpdatedMapEntry[]>(data);

  const updateStateData = (index: number) => {
    const newHoveredValue = !updatedCountryData[index].hovered;
    let newStateData = [...updatedCountryData];
    newStateData[index].hovered = newHoveredValue;
    setUpdatedCountryData(newStateData);
  };

  return (
    <>
      <div className="mt-6 text-3xl">{name}</div>
      <Map countryData={updatedCountryData} onHover={updateStateData} capitalLocation={capitalLocation} />
      <p>States visited: {data.reduce((acc, cur) => (cur.visited ? ++acc : acc), 0)}</p>
      <MapLegend countryData={updatedCountryData} onHover={updateStateData} />
    </>
  );
}
